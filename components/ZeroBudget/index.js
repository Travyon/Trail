import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";


const ZeroBudget =()=>{
    return(
        <View>
        <Text style={styles.title}>Zero-Based Budget</Text>

            <List.Item
                titleStyle={{marginTop:150}}
                descriptionStyle={{marginTop: 0}}
                title="First Item"
                description="Item description"
            />
            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Second Item"
                description="Item description"
            />
            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Third Item"
                description="Item description"
            />
            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Fourth Item"
                description="Item description"
            />
             <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Fifth Item"
                description="Item description"
            />

            
        </View>

    )
}
export default ZeroBudget;

