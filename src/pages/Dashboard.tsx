import React from 'react'
import { useParams } from 'react-router-dom'

const checkPotatos = (username: string | undefined): boolean => {
	if (username) {
		console.log(
			'Daniel, check if the user has pending potatoes using this function'
		)
		return true
	} else {
		console.log('No username detected')
		// TODO create fallback on if no username detected
		return false
	}
}

export const Dashboard = (props: Props) => {
	const { username } = useParams()
	console.log(
		`Daniel, the username has been imbedded into the url and is available as username.`
	)

	const availablePotatoes = checkPotatos(username)

	return availablePotatoes ? (
		<h1>
			Hello {username}. You are now viewing your dashboard. You have been
			sent a potato.
		</h1>
	) : (
		<h1>
			Hello {username}. You are now viewing your dashboard. You have no
			pending potatoes. Bummer.
		</h1>
	)
}

interface Props {}
