import React, { createContext, useEffect, useReducer } from "react";
import { AppState, Appearance } from "react-native";

import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';


interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, 
        ( Appearance.getColorScheme() === 'dark' ) ? darkTheme: lightTheme
        )

    useEffect(() => {
        AppState.addEventListener('change', (status)=>{
            if(status === 'active'){
                ( Appearance.getColorScheme() === 'light' )
                ? setLightTheme()
                : setDarkTheme()
            }
        });
    }, [])


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_teheme' });
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_teheme' });
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )

}