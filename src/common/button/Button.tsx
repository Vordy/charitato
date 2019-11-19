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
	disabled: boolean
): ButtonContainerProps => {
	return {
		color: buttonColorValues[buttonType].color,
		minWidth: buttonSizeValues[buttonSizes].minWidth,
		maxWidth: buttonSizeValues[buttonSizes].maxWidth,
		height: buttonSizeValues[buttonSizes].height,
		disabled: disabled,
	}
}

const ButtonContainer = styled.div<ButtonContainerProps>`
	background-color: ${ButtonContainerProps => ButtonContainerProps.color};
	border: 1px solid ${ButtonContainerProps => ButtonContainerProps.color};
	width: 100%;
	min-width: ${ButtonContainerProps => ButtonContainerProps.minWidth}px;
	max-width: ${ButtonContainerProps => ButtonContainerProps.maxWidth}px;
	height: ${ButtonContainerProps => ButtonContainerProps.height}px;
	opacity: ${ButtonContainerProps =>
		ButtonContainerProps.disabled ? '.4' : '1'};
	border-radius: 999px;
	font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
	display: flex;
	flex-grow: 100;
	flex-direction: center;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: ${Colors.White};
	cursor: ${ButtonContainerProps =>
		ButtonContainerProps.disabled ? 'default' : 'pointer'};
	user-select: none;
	&:hover {
		background-color: ${ButtonContainerProps =>
			!ButtonContainerProps.disabled && 'inherit'};
		color: ${ButtonContainerProps =>
			!ButtonContainerProps.disabled && ButtonContainerProps.color};
		border: ${ButtonContainerProps =>
			!ButtonContainerProps.disabled &&
			'1px solid' + ButtonContainerProps.color};
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
	minWidth: number
	maxWidth: number
	height: number
	disabled: boolean
}

interface Props {
	buttonType: ButtonTypes
	buttonSize: ButtonSizes
	text: string
	onClickHandler: (event: React.MouseEvent) => void
	disabled?: boolean
}
