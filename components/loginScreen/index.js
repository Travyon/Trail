import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton'

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
          type='secondary'/> 
  
        </View>
    );
}

export default LoginScreen


