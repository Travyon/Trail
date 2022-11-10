import React from "react";
import { View, Text, im} from "react-native";
import { List, Divider, Card, Surface} from "react-native-paper";
import styles from "./styles";


const ZeroBudget =()=>{
    return(
        <View>
        <Text style={styles.title}>Zero-Based Budget</Text>
        <Surface elevation={4} style={{height: 100, marginLeft: 30, marginRight: 30, marginTop: 30, }}>
            <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30, fontWeight: '500'}}>$100</Text>
        </Surface>
        <Card style={{marginTop: 90, padding: -53}}>
            <List.Item
                titleStyle={{marginTop:20}}
                descriptionStyle={{marginTop: 0}}
                title="First Item"
                description="Item description"
            />
            <Divider/>
            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Second Item"
                description="Item description"
            />
            <Divider/>

            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Third Item"
                description="Item description"
            />
            <Divider/>
            <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Fourth Item"
                description="Item description"
            />
            <Divider/>
             <List.Item
                titleStyle={{marginTop:-5}}
                descriptionStyle={{marginTop: 0}}
                title="Fifth Item"
                description="Item description"
            />
        </Card>
            
        </View>

    )
}
export default ZeroBudget;

