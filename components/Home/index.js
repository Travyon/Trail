import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import styles from './styles';
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";



const Home = (props) =>{
  const navigation = useNavigation()
  
    return(
      
      
        <View style={styles.titleContainer}>
        <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
            blurRadius={100}
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Trail</Text>
            <Text style={styles.subtitle}>Choose your budget method</Text>
          </View>


          <Button style={styles.choiceone} onPress={()=> navigation.navigate('ZeroBudget')}>
            <Text style={styles.choicetext}> Zero-Based</Text>
          </Button>

          <Button style={styles.choicetwo} onPress={()=> console.log('It works!')}>
            <Text style ={styles.secondchoicetext}>50/30/20</Text>
          </Button>
        

        

        </View>
        
    );
}

export default Home