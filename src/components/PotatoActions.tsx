import { Auth, API } from 'aws-amplify'
import { v4 } from 'uuid'
import React from 'react'

const displayPotatoInfo = async (potatoID: string) => {
    const potatoInfo = await API.get(
        'UserAPI',
        `/items/object/${potatoID}`,
        null
    )
    console.log(potatoInfo)
}

const getAuth = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        return user
    } catch (err) {
        return null
    }
}

const getUserInstance = async (userID: string) => {
    const userInfo = await API.get('UserAPI', `/items/object/${userID}`, null)
    return userInfo
}

const setUpPotatoInstance = async (userID: string, potatoID: string) => {
    // console.log(`Creating potato ${potatoID} for ${userID} at ${Math.floor(Date.now() / 1000)}`)
    await API.post('UserAPI', '/items', {
        body: {
            id: potatoID,
            version: '1b', //version 1, potato entry
            history: [userID],
            timeCreated: Math.floor(Date.now() / 1000),
        },
    })
}

const addPotatoToUser = async (
    userID: string,
    potatoID: string,
    name: string,
    potatoHistory: Array<string>
) => {
    let newHistory = potatoHistory

    if(newHistory === undefined) {
        newHistory = [potatoID]
    }
    else {
        potatoHistory.push(potatoID)
    }
    
    await API.post('UserAPI', '/items', {
        body: {
            id: userID,
            version: '1a', //version 1, user entry
            name: name,
            hasPotato: true,
            history: newHistory,
        },
    })
}

// ModalActions
// ============================================================

//NewPotato - generates a new potato, adds to user history and adds user to potato history
export const NewPotato = async () => {
    const potatoID = v4() //get id for potato
    const user = await getAuth() //get id for user

    if (user === null) {
        alert('Critical error: cannot create potato while not authenticated')
        return
    }

    const userInstance = await getUserInstance(user.username)

    console.log(userInstance)
    await setUpPotatoInstance(user.username, potatoID)
    await addPotatoToUser(user.username, potatoID, userInstance.name, userInstance.history)
    displayPotatoInfo(potatoID)
}

export const SendPotato = () => {
    return <div>Sending potato yo!</div>
}

export const ReceivePotato = () => {
    return <div>Receiving potato yo!</div>
}

export const PayPotato = () => {
    return <div>Paying potato yo!</div>
}
