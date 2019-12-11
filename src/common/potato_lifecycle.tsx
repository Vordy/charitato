import { API, Auth } from 'aws-amplify'
import { DBInstance, getUserInstance, UserState } from './user_state'
import { v4 } from 'uuid'
import {
    defaultPotatoState,
    getPotatoInstance,
    PotatoState,
} from './potato_state'

// RELATED GLOBALS
// ---------------------------------------------------------

export const potatoIdentifier = 'CID='

// VARIABLES
// ---------------------------------------------------------

// const maxPotatoLifetime = 432000 // 5 days
const maxPotatoLifetime = 86400 // 1 days
const seconds = 1000 // to get time in seconds

// INTERFACES/ENUMS
// ---------------------------------------------------------

export enum UserPotatoStatus {
    NOAC,
    FULL,
    GOOD,
}

// User returned by Cognito, used for accessing DB instances
interface User {
    username: string
    attributes: {
        name: string
    }
}

// ---------------------------------------------------------
// Main Lifecycle - the functions that progress a potato
//                  through it's life cycle
// ---------------------------------------------------------

// ---------------------------------------------------------
// MODIFY:  the functions that handle the movement of a
//          charitato from one account to another, will
//          include three DB modifications
// ---------------------------------------------------------

const generateTimes = (): { timeCreated: string; timeOfDeath: string } => {
    const currentTime = Math.floor(Date.now() / seconds)
    const deathTime =
        currentTime + Math.floor(Math.random() * Math.floor(maxPotatoLifetime))
    return { timeCreated: `${currentTime}`, timeOfDeath: `${deathTime}` }
}

const createNewPotatoInstance = async (
    userState: UserState,
    potatoID: string
) => {
    if (userState.instance) {
        const times = generateTimes()

        const newPotato: PotatoState = {
            history: [`${userState.instance.id}`],
            id: potatoID,
            timeCreated: times.timeCreated,
            timeOfDeath: times.timeOfDeath,
            version: '1.0.0b',
        }

        await API.post('UserAPI', '/items', { body: newPotato })

        return newPotato
    }
    return defaultPotatoState
}

export const createPotato = async (userState: UserState) => {
    // if the current newest history item on the user is 'none' it should
    // be replaced not concatenated
    const newUUID = v4()

    const newPotato = await createNewPotatoInstance(userState, newUUID)
    await addToAccount(userState, newPotato)
}

const addToAccount = async (userState: UserState, potatoState: PotatoState) => {
    if (userState.instance) {
        const newData: DBInstance = userState.instance

        if (potatoState.id && potatoState.history) {
            newData.currentPotato = potatoState.id
            newData.hasPotato = true
            if (newData.history[0] === 'none') {
                newData.history = [`${potatoState.id}`]
            } else {
                newData.history.push(potatoState.id)
            }
        }

        await API.post('UserAPI', '/items', { body: newData })
    }
}

const removeFromPrevAccount = async (potatoState: PotatoState) => {
    if (potatoState.history) {
        const historyLength = potatoState.history.length
        const previousUser = potatoState.history[historyLength - 1]

        const previousUserState = await getUserInstance(previousUser)

        const newData = previousUserState
        newData.hasPotato = false
        newData.currentPotato = 'none'

        await API.post('UserAPI', '/items', { body: newData })
    }
}

const updatePotatoHistory = async (
    userState: UserState,
    potatoState: PotatoState
) => {
    const newData: PotatoState = potatoState

    if (newData.history && userState.instance) {
        newData.history.push(userState.instance.id)
    }

    await API.post('UserAPI', '/items', { body: newData })
}

// ---------------------------------------------------------
// RECEIVE: the functions that handle the receiving of a
//          charitato, which includes deleting from old
//          account as well as creating a new one
// ---------------------------------------------------------

// needs to handle no account, yes account (empty, or full)
// CASE 1: No account
//  - display a nice PotatoInterface-like page w/ link to DB
//  - clicking on it will take you to user login/signup
//  - should drop you in the dashboard with your potato

// CASE 2: Yes account (empty)
//  - should route you directly to dashboard w/ new potato

// CASE 3: Yes account (full)
//  - should display an error page ("Potato Bank Full")

export const incomingPotato = async (
    userState: UserState,
    potatoID: string,
    reload: () => void
) => {
    // Step 0: make sure this isn't a repeat, don't waste API calls
    if (userState.instance) {
        if (userState.instance.currentPotato === potatoID) {
            // same potato as already dealt with, disregard
            return null
        }
    } else {
        return null
    }

    // Step 1: get potato resource
    const potatoState = await getPotatoInstance(potatoID)

    // Step 2: add to new account
    await addToAccount(userState, potatoState)

    // Step 3: remove from old account
    await removeFromPrevAccount(potatoState)

    // Step 4: updated potato history
    await updatePotatoHistory(userState, potatoState)

    reload()
}

// checkStatus determines which of the CASES we are in
export const checkStatus = (userState: UserState): UserPotatoStatus => {
    if (userState.instance) {
        if (userState.instance.hasPotato) {
            return UserPotatoStatus.FULL
        } else {
            return UserPotatoStatus.GOOD
        }
    } else {
        return UserPotatoStatus.NOAC
    }
}

// ---------------------------------------------------------
// EXPLODE (?)
// ---------------------------------------------------------

// ---------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------

// check if logged in (for IncomingPotato)
export const getAuth = async (): Promise<User | null> => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        // console.log(user) // TODO: remove this later
        return user
    } catch (err) {
        return null
    }
}

// check if object is empty
export const objectIsEmpty = (obj: {}): boolean => {
    if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true
    }
    return false
}

// ---------------------------------------------------------
