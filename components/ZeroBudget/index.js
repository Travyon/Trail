import React from "react";
import { View, Text, ImageBackground, ScrollView, SafeAreaView} from "react-native";
import { List, Divider, Surface, Appbar, BottomNavigation} from "react-native-paper";
import styles from "./styles";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;


const ZeroBudget =()=>{
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
      { key: 'albums', title: 'Albums', focusedIcon: 'album' },
      { key: 'recents', title: 'Recents', focusedIcon: 'history' },
      { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
      });

    return(
    
    <SafeAreaView style={styles.backcolor}>
        
        <Appbar.Header style={{marginTop: -20, backgroundColor:'gold'}}>
            <Appbar.BackAction style={{marginTop: 20}} onPress={()=>{console.log('Back')}}/>
            <Appbar.Action style={{marginLeft: 250}} icon="plus" onPress={()=>{console.log('add')}}/>
            <Appbar.Content title="Trail" style={{marginLeft: -335}}/>
        </Appbar.Header>
        
        <ScrollView style={{marginBottom: -600}}>
        <Surface elevation={5} style={{height: 110, marginLeft: 30, marginRight: 30, marginTop: 20, borderRadius: 20, backgroundColor: 'black'}}>
            <Text style={{textAlign: 'center',color: 'gold', marginTop: 10, fontWeight: '600'}}>Remaining Balance</Text>
            <Text style={{textAlign: 'center', marginTop: 15, fontSize: 30, fontWeight: '700', color: 'gold'}}>$100</Text>
        </Surface>

        <Surface elevation={5} style={{height: 110, marginTop: 40,marginRight: 10, marginLeft:10, borderRadius: 20, backgroundColor:'black', shadowOpacity: 1, opacity: 10}}>
            <Text style={{textAlign: 'center', marginRight: 285, fontSize: 25, fontWeight: '700', marginTop: 10, color: 'gold' }}>Bills:</Text>
            <List.Item
                titleStyle={{marginTop:-5, color: 'white', fontWeight: '700'}}
                descriptionStyle={{marginTop:1, color: 'white'}}
                title="AT&T"
                description="$150"
            />

        </Surface>
       

        <Surface style={{marginTop: 45, padding: -53, backgroundColor:'white', borderRadius: 30}} elevation={5} >
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
        </Surface>
    </ScrollView>
    </SafeAreaView>
    

    )
}
export default ZeroBudget;

