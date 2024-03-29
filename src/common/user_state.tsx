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
    isError: boolean
}

// Default values for exporting into States
export const defaultUserState: UserState = {}

// Default values for exporting into UserContext
const defaultUserResource: UserResource = {
    isError: false,
    isLoading: false,
    state: {},
}

const APIName = 'UserAPI'
const APIPostPath = '/items'
const APIGetPath = '/items/object/'

const objectIsEmpty = (obj: {}): boolean => {
    if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true
    }
    return false
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
        APIName,
        `${APIGetPath}${username}`,
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
        version: '1.0.0a', // version 1, user instance
    }

    await API.post(APIName, APIPostPath, { body: initialUser })

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

    if (objectIsEmpty(instance)) {
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
            let errorFlag = false

            setData({
                isError: errorFlag,
                isLoading: true,
                state: defaultUserResource.state,
            })
            const result = await getUserState()

            if (objectIsEmpty(result)) {
                errorFlag = true
            }

            setData({ state: result, isError: errorFlag, isLoading: false })
        }

        userState()
    }, [])

    return data
}
