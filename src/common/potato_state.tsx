import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

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
    // console.log(response) // TODO: remove this later
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

export const PotatoStateResource = (potatoID: string) => {
    const [data, setData] = useState(defaultPotatoResource)

    useEffect(() => {
        const userState = async () => {
            setData({ state: defaultPotatoResource.state, isLoading: true })
            const result = await getPotatoState(potatoID)
            setData({ state: result, isLoading: false })
        }

        userState()
    }, [potatoID])

    return data
}
