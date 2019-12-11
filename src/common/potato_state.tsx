import { PotatoTypes } from 'assets/potatoes/potato'
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { objectIsEmpty } from './potato_lifecycle'
import { UserState } from './user_state'

export interface PotatoState {
    id?: string
    timeCreated?: string
    timeOfDeath?: string
    history?: string[]
    version?: string
}

export interface PotatoResource {
    state: PotatoState
    isLoading: boolean
}

export const defaultPotatoState: PotatoState = {}

export const defaultPotatoResource: PotatoResource = {
    isLoading: false,
    state: {},
}

export const getPotatoInstance = async (
    potatoID: string
): Promise<PotatoState> => {
    const response: PotatoState = await API.get(
        'UserAPI',
        `/items/object/${potatoID}`,
        null
    )
    return response
}

const getPotatoState = async (potatoID: string): Promise<PotatoState> => {
    const result: PotatoState = await getPotatoInstance(potatoID)
    if (Object.entries(result).length === 0 && result.constructor === Object) {
        return { id: 'nopotato' }
    } else {
        return result
    }
}

export const PotatoStateResource = (
    userState: UserState,
    setPotatoLoading: (state: boolean) => void
) => {
    const [data, setData] = useState(defaultPotatoResource)

    useEffect(() => {
        const potatoState = async () => {
            setData({ state: defaultPotatoResource.state, isLoading: true })
            setPotatoLoading(true)

            const result = userState.instance
                ? await getPotatoState(userState.instance.currentPotato)
                : defaultPotatoState

            setPotatoLoading(false)
            setData({ state: result, isLoading: false })
        }

        if (!objectIsEmpty(userState)) {
            potatoState()
        }
    }, [userState, setPotatoLoading])

    return data
}

// helper functions and variables
// -----------------------------------------------

// Calculates the color and text of a potato based on time
export const calculatePotatoType = (
    timeCreated: string,
    timeOfDeath: string
): { potato: PotatoTypes; subText: string } => {
    enum PotatoStages {
        SortaColdish = 0.2,
        KindaMedium = 0.4,
        Medium = 0.6,
        Hot = 0.8,
        SuperHot = 1.0,
    }

    const secondes = 1000 // i know tslint is reading this but you suck
    const currentTime = Math.floor(Date.now() / secondes)
    const timeSinceCreation = currentTime - +timeCreated
    const percentDone = timeSinceCreation / (+timeOfDeath - +timeCreated)

    if (percentDone < PotatoStages.SortaColdish) {
        return {
            potato: PotatoTypes.SortaColdish,
            subText: "It's sorta coldish",
        }
    } else if (percentDone < PotatoStages.KindaMedium) {
        return {
            potato: PotatoTypes.KindaMedium,
            subText: "It's kinda medium",
        }
    } else if (percentDone < PotatoStages.Medium) {
        return {
            potato: PotatoTypes.Medium,
            subText: "It's medium",
        }
    } else if (percentDone < PotatoStages.Hot) {
        return {
            potato: PotatoTypes.Hot,
            subText: "It's getting hot!",
        }
    } else if (percentDone < PotatoStages.SuperHot) {
        return {
            potato: PotatoTypes.SuperHot,
            subText: "It's Super Hot!",
        }
    } else {
        return {
            potato: PotatoTypes.Fresh,
            subText: '',
        }
    }
}
