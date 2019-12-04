import { API, Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'

// User: from Cognito User Auth
interface User {
    username: string
    attributes: {
        name: string
    }
}

// DBInstance: from DynamoDB table
interface DBInstance {
    id: string
    version: string
    hasPotato: boolean
    name: string
}

// UserState: combination of User and DBInstance
interface UserState {
    username?: string
    user?: User
    instance?: DBInstance
}

// UserResource: wrapped return of UserState and an isLoading bool
export interface UserResource {
    state: UserState
    isLoading: boolean
}

// Default values for exporting into Contexts
export const defaultUserState: UserState = {}

export const defaultUserResource: UserResource = {
    isLoading: false,
    state: {},
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

const getInstance = async (username: string): Promise<DBInstance> => {
    const response: DBInstance = await API.get(
        'UserAPI',
        `/items/object/${username}`,
        null
    )
    // console.log(response) // TODO: remove this later
    return response
}

const setUpUserInstance = async (user: User): Promise<DBInstance> => {
    const initialUser: DBInstance = {
        hasPotato: false,
        id: user.username,
        name: user.attributes.name,
        version: '1a', // version 1, user instance
    }

    await API.post('UserAPI', '/items', { body: initialUser })

    return initialUser
}

const getUserState = async (): Promise<UserState> => {
    const result: UserState = {}

    const user = await getAuth()
    if (user === null) {
        return result
    } else {
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
