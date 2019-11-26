import React from 'react'
import { useParams } from 'react-router'

export const RecPotato = () => {
    const { potatoID } = useParams()

    return <div>{potatoID}</div>
}
