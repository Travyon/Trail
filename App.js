import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/loginScreen';
import UserLogin from './components/UserLogin';
import Home from './components/Home';
import ZeroBudget from './components/ZeroBudget';
import PortionBudget from './components/PortionBudget';
import CreateAccount from './components/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';





const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login" //This component allows navigation throughout the app
          screenOptions={{
            //determines if a header will appear throughout the app
            headerShown: false,
            header: () => null,
            contentStyle: { backgroundColor: 'white' },
          }}>

          <Stack.Screen name="Login" component={LoginScreen} //Where the register and login buttons pressed
          />
          <Stack.Screen name="Register" component={CreateAccount} //App navigates to the screen where an account is created
          />
          <Stack.Screen name="Userlogin" component={UserLogin} //When login button is pressed, the app navigates to login screen 
          />
          <Stack.Screen name="Home" component={Home} //Welcome screen
          />

          <Stack.Screen name="ZeroBudget" component={ZeroBudget} //Zero-Based Budget Screen 
          />
          <Stack.Screen name="PortionBudget" component={PortionBudget} // 50/30/20 Budget Screen
          />
        </Stack.Navigator>

      </NavigationContainer>


    </PaperProvider>

  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
