import { Auth, API } from 'aws-amplify'
import { useState, useEffect } from 'react'

type User = {
    username: string
    name: string
}

type Instance = {
    id: string
    version: string
    hasPotato: boolean
    name: string
}

type UserState = {
    isAuth: boolean
    hasInstance: boolean
    username?: string
    user?: User
    instance?: Instance
}

export type UserResource = {
    state: UserState
    isLoading: boolean
}

export const defaultUserResource: UserResource = {
    state: {
        isAuth: false,
        hasInstance: false,
    },
    isLoading: false,
}

const getAuth = async (): Promise<User | null> => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        // console.log(user) // TODO: remove this later
        return user
    } catch (err) {
        return null
    }
}

const getInstance = async (username: string): Promise<Instance> => {
    const response: Instance = await API.get(
        'UserAPI',
        `/items/object/${username}`,
        null
    )
    // console.log(response) // TODO: remove this later
    return response
}

const setUpUserInstance = async (user: User): Promise<Instance> => {
    const initialUser: Instance = {
        id: user.username,
        version: '1a', // version 1, user instance
        name: user.name,
        hasPotato: false,
    }

    await API.post('UserAPI', '/items', { body: initialUser })

    return initialUser
}

const getUserState = async (): Promise<UserState> => {
    let result: UserState = {
        isAuth: false,
        hasInstance: false,
    }

    const user = await getAuth()
    if (user === null) {
        return result
    } else {
        result.isAuth = true
        result.username = user.username
        result.user = user
    }

    let instance = await getInstance(user.username)
    if (
        Object.entries(instance).length === 0 &&
        instance.constructor === Object
    ) {
        instance = await setUpUserInstance(user)
    }

    result.hasInstance = true
    result.instance = instance

    // console.log(result) //TODO: remove this later
    return result
}

export const UserStateResource = () => {
    const [data, setData] = useState(defaultUserResource)

    useEffect(() => {
        console.log('use effect called')
        const userState = async () => {
            setData({ state: defaultUserResource.state, isLoading: true })
            const result = await getUserState()
            setData({ state: result, isLoading: false })
        }

        userState()
    }, [])

    return data
}
