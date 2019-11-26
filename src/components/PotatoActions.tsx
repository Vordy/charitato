import { Auth, API } from 'aws-amplify'
import { v4 } from 'uuid'
import React from 'react'

const getAuth = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        return user
    } catch (err) {
        return null
    }
}

const displayPotatoInfo = async (potatoID: string) => {
    const potatoInfo = await API.get(
        'UserAPI',
        `/items/object/${potatoID}`,
        null
    )

    const userHistory = potatoInfo.history

    console.log(`User history for potato ${potatoID}`)
    for (let index = 0; index < userHistory.length; index++) {
        const element = userHistory[index];
        const user = await getUserInstance(element)
        console.log(user.name)
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
            timeOfDeath: Math.floor(Math.random() * 432000) + Math.floor(Date.now() / 1000), //Random between 0 and 4 days TODO: make this better, less hardocded
        },
    })
}

const addPotatoToUser = async (
    potatoID: string,
    user: any
) => {

    let newHistory = user.history

    if(newHistory === undefined) {
        newHistory = [potatoID]
    }
    else {
        newHistory.push(potatoID)
    }
        
    await API.post('UserAPI', '/items', {
        body: {
            ...user,
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

    await setUpPotatoInstance(user.username, potatoID)
    await addPotatoToUser(potatoID, userInstance)
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
