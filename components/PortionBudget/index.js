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
            style={{marginTop: 50}}
            />

            <Surface elevation={5} style={{height: 110, marginTop: 30,marginRight: 0, marginLeft:0, borderRadius: 0, backgroundColor:'black', shadowOpacity: 1, opacity: 10}}>
                <Text numberOfLines={1} style={{marginRight: 285, fontSize: 25, fontWeight: '700', marginTop: 10, color: 'gold' }}>Income:</Text>
                <List.Item
                    titleStyle={{marginTop:-5, color: 'white', fontWeight: '700'}}
                    descriptionStyle={{marginTop:1, color: 'white'}}
                    title="AT&T"
                    description="$150"
                />

            </Surface>
       

            
     
  
        </View>
    )
}

export default PortionBudget;

