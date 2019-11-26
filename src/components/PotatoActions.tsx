import React from 'react';
import {v4} from 'uuid'

export const NewPotato = () => {
    const potatoID = v4()
    
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