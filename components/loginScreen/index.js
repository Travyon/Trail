import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const LoginScreen = (props) =>{
    return(
        <View style={styles.titleContainer}>
          <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>Trail</Text>
            <Text style={styles.subtitle}>Your path to financial responsibility</Text>
          </View>
  
        </View>
    );
}

export default LoginScreen


