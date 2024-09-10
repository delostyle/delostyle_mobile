// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './src/Components/DrawerScreen'
// import WelcomeScreen from './src/screens/WelcomeScreen';
import DeloScreen from './src/screens/DeloScreen';

const Stack = createStackNavigator();

  
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="DeloScreen" component={DeloScreen} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
