import React from "react";
import {View, ImageBackground, Text, Dimensions} from 'react-native'
import styles from "./styles";
import { VictoryPie } from "victory-native";
import { Surface , List} from "react-native-paper";




const PortionBudget = () =>{
 
    return(
        <View style={styles.backcolor}>
            <VictoryPie
            data={[
                { x: "50%", y: 50 },
                { x: "30%", y: 30 },
                { x: "20%", y: 20 }
              ]}
            colorScale={["black", "white", "gray"]}
            width={375}
            />

            <Surface elevation={5} style={{height: 60, marginTop: -30,marginRight: 5, marginLeft:5, borderRadius: 10, backgroundColor:'black', shadowOpacity: 0, opacity: 10, paddingTop: 5}}>
                <Text numberOfLines={1} style={{marginLeft: 25,fontSize: 25, fontWeight: '700', marginTop: 5, color: 'gold' }}>Income: $1,000.00</Text>
            </Surface>

            <List.Accordion title="Need" titleStyle={{color: 'white', fontWeight: '700'}} style={{marginTop: 10, marginRight: 10, marginLeft:10, borderRadius: 10, backgroundColor: 'black'}}>
                <List.Item title="First item"/>
                <List.Item title="Second item"/>
                <List.Item title="Third item"/>
            </List.Accordion>

            <List.Accordion title="Want" titleStyle={{color: 'white', fontWeight: '700'}} style={{marginTop: 10, marginRight:10, marginLeft:10, borderRadius: 10, backgroundColor: 'black'}}>
                <List.Item title="First item"/>
                <List.Item title="Second item"/>
                <List.Item title="Third item"/>
            </List.Accordion>

            <List.Accordion title="Save | Debt | Invest" titleStyle={{color: 'white', fontWeight: '700'}} style={{marginTop: 10, marginRight:10, marginLeft:10, borderRadius: 10, backgroundColor: 'black'}}>
                <List.Item title="First item"/>
                <List.Item title="Second item"/>
                <List.Item title="Third item"/>
            </List.Accordion>
        </View>
    )
}

export default PortionBudget;

