import { createStackNavigator } from '@react-navigation/stack';

import HomeScrren from '../screens/HomeScrren';

const Stack = createStackNavigator();

export const Navigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="HomeScrren" component={HomeScrren} />
    </Stack.Navigator>
  );
}