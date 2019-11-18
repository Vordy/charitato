import React from 'react'
import { useParams } from 'react-router-dom'
import { request } from 'http'

let user = {}

const req = request(
	{
		protocol: 'https://',
		host: '3s7xxazifb.execute-api.us-east-2.amazonaws.com',
		path: '/default/checkForPotato',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	},
	response => {
		console.log(response.statusCode) // 200
	}
)

req.write(
	JSON.stringify({
		userID: 'abcd',
	})
)

req.end()

req.on('response', function(response) {
	// console.log('STATUS: ' + response.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(response.headers));
	response.setEncoding('utf8')
	response.on('data', function(chunk) {
		user = JSON.parse(chunk).body.Items[0]
		console.log("Fetched from API:")
		console.log(user)
	})
})

const checkPotatos = (username: string | undefined): boolean => {
	if (username) {
		console.log(
			'Daniel, check if the user has pending potatoes using this function'
		)
		console.log("Printed in checkPotatos:")
		// console.log(user)
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
