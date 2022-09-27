import React from "react";
import {View, Text, ImageBackground, TextInput} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton'
import TextField from "../TextField";

const LoginScreen = (props) =>{
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
          onPress={()=> {
            console.warn("Create Account was pressed");
          }}/>

          <TextField/>

          
  
        </View>
    );
}

export default LoginScreen


