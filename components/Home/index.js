import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";



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


          <Button style={styles.choiceone} mode="elevated" onPress={()=> navigation.navigate('ZeroBudget')}>
            <Text style={styles.choicetext}> Zero-Based</Text>
          </Button>

          <Button style={styles.choicetwo} mode="elevated" onPress={()=> navigation.navigate('PortionBudget')}>
            <Text style ={styles.secondchoicetext}>50/30/20</Text>
          </Button>
        

        

        </View>
        
    );
}

export default Home