import React, { useState } from "react";
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from './styles';


const Home = (props) =>{
  const [selectedValue, setSelectedValue] =
  useState("yes")
  useState("no")

    return(
        <View style={styles.titleContainer}>
  
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Trail</Text>
            <Text style={styles.question}>Do you find budget apps easy to use?</Text>
            
            <TouchableOpacity 
            style={styles.button}
            >
                <Text>Submit</Text>
            </TouchableOpacity>

          </View>

          

        </View>
    );
}

export default Home