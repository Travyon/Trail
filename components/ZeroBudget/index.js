import React from "react";
import { View, Text, ImageBackground} from "react-native";
import { List, Divider, Card, Surface, FAB} from "react-native-paper";
import styles from "./styles";



const ZeroBudget =()=>{


    return(
        <View style={styles.image} >
            <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
            blurRadius={150}
          />

        <Surface elevation={5} style={{height: 110, marginLeft: 30, marginRight: 30, marginTop: 100, borderRadius: 20, backgroundColor: 'black'}}>
            <Text style={{textAlign: 'center',color: 'gold', marginTop: 10, fontWeight: '600'}}>Remaining Balance</Text>
            <Text style={{textAlign: 'center', marginTop: 15, fontSize: 30, fontWeight: '700', color: 'gold'}}>$100</Text>
        </Surface>

        <Surface elevation={5} style={{height: 110, marginTop: 50, borderRadius: 20, backgroundColor:'black', shadowOpacity: 1, opacity: 10}}>
            <Text style={{textAlign: 'center', marginRight: 305, fontSize: 25, fontWeight: '700', marginTop: 10, color: 'gold' }}>Bills:</Text>
            <List.Item
                titleStyle={{marginTop:-5, color: 'white'}}
                descriptionStyle={{marginTop:1}}
                title="AT&T"
                description="$150"
            />

        </Surface>
       

        <Surface style={{marginTop: 50, padding: -53, backgroundColor:'white', borderRadius: 30}} elevation={5} >
            <List.Item
                titleStyle={{marginTop:10, fontSize: 18}}
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


        </Surface>
        <FAB
        icon= "plus"
        style={{ marginTop: 120, marginRight: 50, marginLeft:285, marginBottom: 20, backgroundColor: 'gold'}}
        onPress={()=> console.log('Pressed')}
        />
   
        </View>

    )
}
export default ZeroBudget;

