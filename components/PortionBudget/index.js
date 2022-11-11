import React from "react";
import {View, ImageBackground, Text} from 'react-native'
import styles from "./styles";
import { VictoryPie } from "victory";

const graphicColor = ['#808080', '#FF0000', '#00FF00']
const wantedGraphicData = [{x: '50%', y: 35}, {x: '30%', y: 90}, {x:'20%', y: 100}]

const PortionBudget = () =>{
    
    return(
        <View style={styles.image}>
            <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
            blurRadius={150}
            />

        </View>
    )
}

export default PortionBudget;

