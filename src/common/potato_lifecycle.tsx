import { Auth } from 'aws-amplify'
import { UserState } from './user_state'
import { PotatoState, PotatoStateResource } from './potato_state'

// RELATED GLOBALS
// ---------------------------------------------------------

export const potatoIdentifier = 'CID='

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

const addToAccount = (userState: UserState, potatoState: PotatoState) => {}

const removeFromPrevAccount = (potatoState: PotatoState) => {}

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

export const incomingPotato = (
    userState: UserState,
    potatoID: string
): UserState | null => {
    console.log(`Potato dude: ${potatoID}`)

    // Step 0: make sure this isn't a repeat, don't waste API calls
    if (userState.instance) {
        if (userState.instance.currentPotato === potatoID) {
            //same potato as already dealt with, disregard
            console.log('repeat call!')
            return null
        }
    } else {
        console.log('no user!')
        return null
    }

    // Step 1: get potato resource
    const potatoResource = PotatoStateResource(userState)

    // Step 2: add to new account
    addToAccount(userState, potatoResource.state)

    // Step 3: remove from old account
    removeFromPrevAccount(potatoResource.state)

    // Step 4: modify userState
    userState.instance.currentPotato = potatoID
    userState.instance.hasPotato = true
    // userState.instance.history.push(potatoID)

    return userState
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
