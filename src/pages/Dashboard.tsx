import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { request } from 'http'

interface User {
	userID: string
	hasPotato: boolean
}

const dbConfig = {
	protocol: 'https://',
	host: '3s7xxazifb.execute-api.us-east-2.amazonaws.com',
	path: '/default/checkForPotato',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
}

export const Dashboard = (props: Props) => {
	const { username } = useParams()
	const [user, setUser] = useState<User>({
		userID: 'John Placeholder',
		hasPotato: false,
	})

	useEffect(() => {
		let result: User = {
			userID: '',
			hasPotato: false,
		}

		const req = request(dbConfig, response => {
			console.log(response.statusCode) // 200
		})

		req.write(
			JSON.stringify({
				userID: username,
			})
		)

		req.end()

		req.on('response', function(response) {
			// console.log('STATUS: ' + response.statusCode);
			// console.log('HEADERS: ' + JSON.stringify(response.headers));
			response.setEncoding('utf8')
			response.on('data', function(chunk) {
				result = JSON.parse(chunk).body.Items[0]
				if(result) {setUser(result)}
			})
		})
	}, [])

	return user.hasPotato ? (
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
