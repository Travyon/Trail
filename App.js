import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HorizontalLine from './components/HorizontalLine';
import LoginScreen from './components/loginScreen';
import StyledButton from './components/StyledButton';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style = "light"/>
      <LoginScreen/>
    
      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
