import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LoginScreen from './components/loginScreen';
import CreateAccount from './components/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          header: () => null,
          contentStyle: { backgroundColor: 'white' },
        }}>
 
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={CreateAccount}/>
      </Stack.Navigator>
      <StatusBar backgroundColor='white' barStyle='light-content' />
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
