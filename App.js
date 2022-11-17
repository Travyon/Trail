import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
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
    
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          header: () => null,
          contentStyle: { backgroundColor: 'white' },
        }}>
 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={CreateAccount}/>
        <Stack.Screen name="Userlogin" component={UserLogin}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ZeroBudget" component={ZeroBudget} />
        <Stack.Screen name="PortionBudget" component={PortionBudget}/>


      </Stack.Navigator>
      <StatusBar backgroundColor='white' barStyle='white-content' />
    
    </NavigationContainer>

    </PaperProvider>
   
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
