import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { useParams } from 'react-router-dom'
import { Button } from 'common/button/Button'
import { ButtonSizes, ButtonTypes } from 'common/button/ButtonUtils'
import { Props } from '../Routes'

const SplashHeader = styled.div`
	font-size: 5em;
	font-weight: 700;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: flex;
	padding-left: 32px;
	padding-top: 100px;
`

const BoldText = styled.div`
	font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 56px;
	line-height: 34px;
	text-align: center;
	padding-bottom: 16px;
`

const SubText = styled.div`
	font-family: 'Helvetica Nueue', roboto, Arial, Helvetica, sans-serif;
	font-style: normal;
	font-weight: 100;
	font-size: 56px;
	line-height: 84px;
`

const dbConfig = {
	protocol: 'https://',
	host: '3s7xxazifb.execute-api.us-east-2.amazonaws.com',
	path: '/default/checkForPotato',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
}

export const Dashboard = (appProps: Props) => {
	const { username } = useParams()

	return (
		<SplashHeader>
			<BoldText>
				Welcome {username} <br />
				<SubText>You do not have a potato</SubText>
			</BoldText>

			<Button
				buttonType={ButtonTypes.Primary}
				buttonSize={ButtonSizes.Large}
				text={'Log out'}
				onClickHandler={(e: React.MouseEvent) => {
					appProps.appProps.userHasAuthenticated(false);
				}}
			/>
		</SplashHeader>
	)
}