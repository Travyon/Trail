import React from "react";
import { View, Text, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { List, Divider, Surface, Appbar, BottomNavigation } from "react-native-paper";
import styles from "./styles";





const ZeroBudget = () => {

    return (

        <SafeAreaView style={styles.backcolor}>

            <Appbar.Header style={{ marginTop: -20, backgroundColor: 'black' }}>
                <Appbar.BackAction style={{ marginTop: 20 }} onPress={() => { console.log('Back') }} />
                <Appbar.Action style={{ marginLeft: 250 }} icon="plus" onPress={() => { console.log('add') }} />
                <Appbar.Content title="Trail" style={{ marginLeft: -335 }} />
            </Appbar.Header>

            <ScrollView style={{ marginBottom: -600 }}>
                <Surface elevation={5} style={{ height: 110, marginLeft: 30, marginRight: 30, marginTop: 20, borderRadius: 20, backgroundColor: '#0F52BA' }}>
                    <Text style={{ textAlign: 'center', color: 'black', marginTop: 10, fontWeight: '600' }}>Remaining Balance</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 30, fontWeight: '700', color: 'white' }}>$100</Text>
                </Surface>

                <Surface elevation={5} style={{ height: 110, marginTop: 40, marginRight: 10, marginLeft: 10, borderRadius: 20, backgroundColor: '#0F52BA', shadowOpacity: 1, opacity: 10 }}>
                    <Text style={{ textAlign: 'center', marginRight: 285, fontSize: 25, fontWeight: '700', marginTop: 10, color: 'white' }}>Bills:</Text>
                    <List.Item
                        titleStyle={{ marginTop: -5, color: 'white', fontWeight: '700' }}
                        descriptionStyle={{ marginTop: 1, color: 'white' }}
                        title="AT&T"
                        description="$150"
                    />

                </Surface>


                <Surface style={{ marginTop: 45, padding: 60, backgroundColor: 'white', borderRadius: 30 }} elevation={5} >
                    <List.Item
                        titleStyle={{ marginTop: 10, fontSize: 18 }}
                        descriptionStyle={{ marginTop: 0 }}
                        title="First Item"
                        description="Item description"
                    />

                    <Divider />
                    <List.Item
                        titleStyle={{ marginTop: -5 }}
                        descriptionStyle={{ marginTop: 0 }}
                        title="Second Item"
                        description="Item description"
                    />
                    <Divider />

                    <List.Item
                        titleStyle={{ marginTop: -5 }}
                        descriptionStyle={{ marginTop: 0 }}
                        title="Third Item"
                        description="Item description"
                    />
                    <Divider />
                    <List.Item
                        titleStyle={{ marginTop: -5 }}
                        descriptionStyle={{ marginTop: 0 }}
                        title="Fourth Item"
                        description="Item description"
                    />
                    <Divider />
                    <List.Item
                        titleStyle={{ marginTop: -5 }}
                        descriptionStyle={{ marginTop: 0 }}
                        title="Fifth Item"
                        description="Item description"
                    />
                </Surface>
            </ScrollView>
        </SafeAreaView>


    )
}
export default ZeroBudget;

