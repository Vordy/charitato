import { Colors } from './Colors'

const themes = {
    dark: {
        background: Colors.DarkGray,
        foreground: Colors.White,
    },
    light: {
        background: Colors.White,
        foreground: Colors.RichDark,
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
