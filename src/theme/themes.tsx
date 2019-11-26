import { Colors } from './Colors'

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
    if (currentTheme) {
        if (currentTheme === 'dark') {
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
        }
    }
    window.location.reload(false)
}

export const getTheme = () => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
        if (currentTheme === 'dark') {
            return themes.dark
        } else {
            return themes.light
        }
    } else {
        localStorage.setItem('theme', 'light')
        return themes.light
    }
}
