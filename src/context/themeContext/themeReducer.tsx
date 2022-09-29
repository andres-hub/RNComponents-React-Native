import { Theme } from "@react-navigation/native"


type ThemeAction =
    | { type: 'set_light_teheme' }
    | { type: 'set_dark_teheme' }

export interface ThemeState extends Theme {

    currentTheme: 'light' | 'dark';
    dividerColor: string;

}

export const lightTheme: ThemeState = {
    dividerColor: 'rgba(0,0,0,0,0.7)',
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    dividerColor: 'rgba(255,255,255,0.6)',
    currentTheme: 'light',
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_teheme':
            return { ...lightTheme }
        case 'set_dark_teheme':
            return { ...darkTheme }
        default:
            return state;
    }

}