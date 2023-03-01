import React from "react";
import { View, Text, ImageBackground, TextInput, StatusBar } from 'react-native';
import styles from './styles';
import StyledButton from "../../components/StyledButton";
import { useNavigation } from '@react-navigation/native'
import LoginButton from "../../components/LoginButton";


const LoginScreen = (props) => {
  const navigation = useNavigation() //Allows for this component to use navigation 

  return (
    <View style={styles.titleContainer}>
      <ImageBackground
            source={require('../../../assets/Images/TrailLogo.jpeg')}
        style={styles.image}
      />


      <StyledButton
        //Parent component sending to child component
        type='secondary'
        content={"Register"}
        onPress={() => navigation.navigate('Register')} />

      <LoginButton
        type='secondary'
        content={"Login"}
        onPress={() => navigation.navigate('Userlogin')}
      />



    </View>
  );
}

export default LoginScreen


