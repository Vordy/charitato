import {Auth, API} from 'aws-amplify'
import {v4} from 'uuid'
import React from 'react';

const getAuth = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        return user
    } catch (err) {
        return null
    }
}

const setUpUserInstance = async (user: any) => {
    await API.post('UserAPI', '/items', {
        body: {
            id: user.getUsername(),
            name: user.attributes.name,
            hasPotato: false,
        },
    })
}

export const NewPotato = () => {
    const potatoID = v4()
    console.log(`Creating potato ${potatoID}`)
    
    return (
        <div>Creating potato yo!</div>
    )
}

export const SendPotato = () => {
    return (
        <div>Sending potato yo!</div>
    )
}

export const ReceivePotato = () => {
    return (
        <div>Receiving potato yo!</div>
    )
}

export const PayPotato = () => {
    return (
        <div>Paying potato yo!</div>
    )
}