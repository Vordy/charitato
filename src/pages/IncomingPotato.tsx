import React, { useEffect, useState } from 'react'
import {
    InterfaceContainer,
    PotatoModeContainer,
} from 'common/dashboard/potato_styles'
import { UserResource, UserStateResource } from 'common/user_state'
import { useParams } from 'react-router'
import { PotatoResource, PotatoStateResource } from 'common/potato_state'

export const IncPotato = () => {
    const { potatoID } = useParams()
    const user: UserResource = UserStateResource()
    const potato: PotatoResource = PotatoStateResource(user.state)

    console.log(user)
    console.log(potato)

    return (
        <InterfaceContainer>
            <PotatoModeContainer>
                You got potatoID: {potatoID}
            </PotatoModeContainer>
        </InterfaceContainer>
    )
}
