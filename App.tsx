import 'react-native-gesture-handler';
import * as React from 'react';

import { Navigatior } from './src/navigatior/Navigatior';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: 'black',
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }

const App = () => {
  return (
    <AppState>    
        <Navigatior />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}


export default App;
