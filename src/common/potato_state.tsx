import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { UserState } from './user_state'
import { PotatoTypes } from 'assets/potatoes/potato'
import { objectIsEmpty } from './potato_lifecycle'

export interface PotatoState {
    id?: string
    timeCreated?: string
    timeOfDeath?: string
    history?: []
}

export interface PotatoResource {
    state: PotatoState
    isLoading: boolean
}

export const defaultPotatoState: PotatoState = {}

export const defaultPotatoResource: PotatoResource = {
    state: {},
    isLoading: false,
}

const getInstance = async (potatoID: string): Promise<PotatoState> => {
    const response: PotatoState = await API.get(
        'UserAPI',
        `/items/object/${potatoID}`,
        null
    )
    return response
}

const getPotatoState = async (potatoID: string): Promise<PotatoState> => {
    const result: PotatoState = await getInstance(potatoID)
    if (Object.entries(result).length === 0 && result.constructor === Object) {
        return { id: 'nopotato' }
    } else {
        return result
    }
}

// Main resource - takes a userstate and returns a potato state
export const PotatoStateResource = (userState: UserState) => {
    const [data, setData] = useState(defaultPotatoResource)

    useEffect(() => {
        const potatoState = async () => {
            let result

            setData({ state: defaultPotatoResource.state, isLoading: true })

            if (userState.instance) {
                result = await getPotatoState(userState.instance.currentPotato)
            } else {
                result = defaultPotatoState
            }

            setData({ state: result, isLoading: false })
        }

        if (!objectIsEmpty(userState)) {
            potatoState()
        }
    }, [userState])

    return data
}

// helper functions and variables
// -----------------------------------------------

// local info for potato
export const potatoInfo = {
    id: '',
    potatoType: PotatoTypes.Fresh,
    potatoTitleText: "You don't have a potato",
    potatoSubTitleText: 'Bake one up for your friends!',
}

// Calculates the color and text of a potato based on time
export const calculatePotatoType = (
    timeCreated: string,
    timeOfDeath: string
): { potato: PotatoTypes; subText: string } => {
    const currentTime = 10 // TODO: get unix time
    const percentDone = (currentTime / (+timeOfDeath - +timeCreated)) * 100

    if (percentDone < 20) {
        return {
            potato: PotatoTypes.SortaColdish,
            subText: "It's sorta coldish",
        }
    } else if (percentDone < 40) {
        return {
            potato: PotatoTypes.KindaMedium,
            subText: "It's kinda medium",
        }
    } else if (percentDone < 60) {
        return {
            potato: PotatoTypes.Medium,
            subText: "It's medium",
        }
    } else if (percentDone < 80) {
        return {
            potato: PotatoTypes.Hot,
            subText: "It's getting hot!",
        }
    } else {
        return {
            potato: PotatoTypes.SuperHot,
            subText: "It's Super Hot!",
        }
    }
}
