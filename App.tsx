import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigatior } from './src/navigatior/Navigatior';

const App = () => {
  return (
    <NavigationContainer>
      <Navigatior/>
    </NavigationContainer>
  )
}

export default App;
