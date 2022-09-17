import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

    
      <View style={styles.titleContainer}>
        <ImageBackground 
          source={require('./assets/Images/Trailback.jpeg')}
          style={styles.image}
        />

        <View style={styles.titles}>
         <Text style={styles.title}>Trail</Text>
         <Text style={styles.subtitle}>Your path to financial responsibility</Text>
        </View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer:{
    width: '100%',
    height: '100%'
  },
  
  titles: {
    marginTop:'30%',
    width:'100%',
    alignItems: 'center'
  },
  title:{
    fontSize: '40px',
    fontWeight: '700',
    color: '#FFFFFF'
  },
  subtitle:{
    fontSize: '16px',
    color: '#FFFFFF'
  },

  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  }

});
