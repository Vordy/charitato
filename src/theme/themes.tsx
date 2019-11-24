import {Colors} from './Colors'

const themes = {
    light: {
        foreground: Colors.RichDark,
        background: Colors.White,
    },
    dark: {
        foreground: Colors.White,
        background: Colors.DarkGray,
    },
}

export const switchTheme = () => {
	const currentTheme = localStorage.getItem('theme')
	if(currentTheme) {
		if(currentTheme === 'dark') {
			localStorage.setItem('theme', 'light')
		}
		else {
			localStorage.setItem('theme', 'dark')
		}
	}
	window.location.reload(false)
}

export const getTheme = () => {
	const currentTheme = localStorage.getItem('theme')
	if(currentTheme) {
		if(currentTheme === 'dark') {
			return themes.dark
		}
		else {
			return themes.light
		}
	}
	else {
		localStorage.setItem('theme', 'light')
		return themes.light
	}
}

// const isAuth = async () => {
// 	try {
// 		let user = await Auth.currentAuthenticatedUser();
// 		return user
//     } catch (err) {
//         return null;
//     }
// }

// const setCurrentTheme = async (currentTheme: string) => {
// 	const user = await isAuth();
// 	if(user === null) {
// 		console.log("no user to set theme to")
// 		return
// 	}

//     const response = await API.post('UserAPI', '/items', {
//         body: {
//             id: user.username,
//             theme: currentTheme,
//         },
//     })
//     // alert(JSON.stringify(response, null, 2))
// }

// const getCurrentTheme = async () => {

// 	const user = await isAuth();
// 	if(user === null) {
// 		return themes.light
// 	}

// 	const response = await API.get('UserAPI', `/items/object/${user.username}`, null)
	
// 	if(response) {
// 		setCurrentTheme("light")
// 		console.log("no theme")
// 	}
// 	else {
// 		console.log("yes theme")
// 	}

//     // alert(JSON.stringify(response, null, 2))
// }