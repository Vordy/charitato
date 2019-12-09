import { PotatoTypes } from 'assets/potatoes/potato'
import { API } from 'aws-amplify'
import { UserContext } from 'pages/Dashboard'
import { useContext, useEffect, useState } from 'react'
import { objectIsEmpty } from './potato_lifecycle'

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

// Main resource - takes a userstate and returns a potato state
export const PotatoStateResource = () => {
    const [data, setData] = useState(defaultPotatoResource)
    const user = useContext(UserContext)

    useEffect(() => {
        const potatoState = async () => {
            setData({ state: defaultPotatoResource.state, isLoading: true })

            const result = user.instance
                ? await getPotatoState(user.instance.currentPotato)
                : defaultPotatoState

            setData({ state: result, isLoading: false })
        }

        if (!objectIsEmpty(user)) {
            potatoState()
        }
    }, [user])

    return data
}

// helper functions and variables
// -----------------------------------------------

// Calculates the color and text of a potato based on time
export const calculatePotatoType = (
    timeCreated: string,
    timeOfDeath: string
): { potato: PotatoTypes; subText: string } => {
    const secondes = 1000 // i know tslint is reading this but you suck
    const currentTime = Math.floor(Date.now() / secondes)
    const timeSinceCreation = currentTime - +timeCreated
    const percentDone = timeSinceCreation / (+timeOfDeath - +timeCreated)

    if (percentDone < 0.2) {
        return {
            potato: PotatoTypes.SortaColdish,
            subText: "It's sorta coldish",
        }
    } else if (percentDone < 0.4) {
        return {
            potato: PotatoTypes.KindaMedium,
            subText: "It's kinda medium",
        }
    } else if (percentDone < 0.6) {
        return {
            potato: PotatoTypes.Medium,
            subText: "It's medium",
        }
    } else if (percentDone < 0.8) {
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
