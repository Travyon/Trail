import React from "react";
import {View, Text, ImageBackground, TextInput} from 'react-native';
import styles from './styles';
import TextField from "../TextField";
import StyledButton from "../StyledButton";
import { useNavigation } from '@react-navigation/native'





const LoginScreen = (props) =>{
  const navigation = useNavigation()

    return(
        <View style={styles.titleContainer}>
          <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
          />
  
          <View style={styles.titles}>
            <Text style={styles.subtitle}></Text>
            <Text style={styles.title}>Trail</Text>
          </View>

          <StyledButton
          //Parent component sending to child component
          type='secondary' 
            content={"Create Account"}
            onPress={()=> navigation.navigate('Register')}/>

          <TextField
            type='primary'
          />
          

        </View>
    );
}

export default LoginScreen


