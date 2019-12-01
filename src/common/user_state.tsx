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
    name?: string
    hasPotato?: boolean
}

const getAuth = async (): Promise<User | null> => {
    try {
        const user = await Auth.currentAuthenticatedUser()
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
    return response
}

const setUpUserInstance = async (user: User) => {
    const initialUser: Instance = {
        id: user.username,
        version: '1a', // version 1, user instance
        name: user.name,
        hasPotato: false,
    }

    await API.post('UserAPI', '/items', { body: initialUser })

    return initialUser
}

const getUserState = async () => {
    let result: UserState = {
        isAuth: false,
        hasInstance: false,
    }

    console.log('Setting up user state: ')
    const user = await getAuth()
    if (user === null) {
        return result
    } else {
        result.isAuth = true
        result.username = user.username
        result.name = user.name
    }

    let instance = await getInstance(user.username)
    if (
        Object.entries(instance).length === 0 &&
        instance.constructor === Object
    ) {
        instance = await setUpUserInstance(user)
    }

    result.hasInstance = true
    result.hasPotato = instance.hasPotato

    console.log(result)
    return result
}

export const UserStateResource = () => {
    const [data, setData] = useState({ state: {}, isLoading: false })

    useEffect(() => {
        const userState = async () => {
            setData({ state: {}, isLoading: true })
            const result = await getUserState()
            setData({ state: result, isLoading: true })
        }

        userState()
    }, [])

    return data
}
