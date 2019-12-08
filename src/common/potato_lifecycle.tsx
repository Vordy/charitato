import { Auth } from 'aws-amplify'
import { UserState } from './user_state'

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

// ---------------------------------------------------------
// RECEIVE: the functions that handle the receiving of a
//          charitato, which includes deleting from old
//          account as well as creating a new one
// ---------------------------------------------------------

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

// needs to handle no account, yes account (empty, or full)
// CASE 1: No account
//  - display a nice PotatoInterface-like page w/ link to DB
//  - clicking on it will take you to user login/signup
//  - should drop you in the dashboard with your potato

// CASE 2: Yes account (empty)
//  - should route you directly to dashboard w/ new potato

// CASE 3: Yes account (full)
//  - should display an error page ("Potato Bank Full")

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
