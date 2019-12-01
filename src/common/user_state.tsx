import { Auth, API } from 'aws-amplify'

type User = {
    username: string
    name: string
}

type Instance = {
    hasPotato: boolean
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

const getUserState = async () => {
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
        result.name = user.name
    }

    const instance = await getInstance(user.username)
    if (
        Object.entries(instance).length === 0 &&
        instance.constructor === Object
    ) {
        return result
    } else {
        result.hasInstance = true
        result.hasPotato = instance.hasPotato
    }

    return result
}
