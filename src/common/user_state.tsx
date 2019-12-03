import { API, Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'

interface User {
    username: string
    name: string
}

interface Instance {
    id: string
    version: string
    hasPotato: boolean
    name: string
}

interface UserState {
    isAuth: boolean
    hasInstance: boolean
    username?: string
    user?: User
    instance?: Instance
}

export interface UserResource {
    state: UserState
    isLoading: boolean
}

export const defaultUserResource: UserResource = {
    isLoading: false,
    state: {
        hasInstance: false,
        isAuth: false,
    },
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
        hasPotato: false,
        id: user.username,
        name: user.name,
        version: '1a', // version 1, user instance
    }

    await API.post('UserAPI', '/items', { body: initialUser })

    return initialUser
}

const getUserState = async (): Promise<UserState> => {
    const result: UserState = {
        hasInstance: false,
        isAuth: false,
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
        const userState = async () => {
            setData({ state: defaultUserResource.state, isLoading: true })
            const result = await getUserState()
            setData({ state: result, isLoading: false })
        }

        userState()
    }, [])

    return data
}
