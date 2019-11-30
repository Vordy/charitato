import React from 'react'
import styled from '@emotion/styled'

import {
    buttonColorValues,
    ButtonSizes,
    buttonSizeValues,
    ButtonTypes,
} from 'common/button/ButtonUtils'
import { Colors } from 'theme/Colors'

const determineCustomStyling = (
    buttonType: ButtonTypes,
    buttonSizes: ButtonSizes,
    disabledStat: boolean
): ButtonContainerProps => {
    return {
        color: buttonColorValues[buttonType].color,
        disabled: disabledStat,
        height: buttonSizeValues[buttonSizes].height,
        maxWidth: buttonSizeValues[buttonSizes].maxWidth,
        minWidth: buttonSizeValues[buttonSizes].minWidth,
    }
}

const ButtonContainer = styled.div<ButtonContainerProps>`
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    width: 100%;
    min-width: ${props => props.minWidth}px;
    max-width: ${props => props.maxWidth}px;
    height: ${props => props.height}px;
    opacity: ${props => (props.disabled ? '.4' : '1')};
    border-radius: 999px;
    font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-grow: 100;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${Colors.White};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    user-select: none;
    &:hover {
        background-color: ${props => !props.disabled && 'inherit'};
        color: ${props => !props.disabled && props.color};
        border: ${props => !props.disabled && '1px solid' + props.color};
        transition: background-color 270ms ease;
    }
`

export const Button = ({
    buttonSize,
    buttonType,
    disabled = false,
    onClickHandler,
    text,
}: Props) => {
    const buttonSyles = determineCustomStyling(buttonType, buttonSize, disabled)

    return (
        <ButtonContainer onClick={onClickHandler} {...buttonSyles}>
            {text}
        </ButtonContainer>
    )
}

interface ButtonContainerProps {
    color: string
    disabled: boolean
    height: number
    maxWidth: number
    minWidth: number
}

interface Props {
    buttonType: ButtonTypes
    buttonSize: ButtonSizes
    text: string
    onClickHandler: (event: React.MouseEvent) => void
    disabled?: boolean
}
