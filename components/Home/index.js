import React, { useState } from "react";
import {View, Text, Button, TouchableOpacity, TextInput, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';


const Home = (props) =>{


    return(
      
        
        <View style={styles.titleContainer}>
        <ImageBackground 
            source={require('../../assets/Images/Trailback.jpeg')}
            style={styles.image}
            blurRadius={100}
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Trail</Text>
          </View>
      
          <Formik 
          initialValues={{ body: '' , secondbody: '', thirdbody:''}}
          onSubmit={(values)=>{
            console.log(values);
          }}
          >
          {(formikprops) => (
            <View>
              <Text style={styles.question}>How can we make Trail more cost-efficient? </Text>
              <TextInput
              multiline
              style={styles.input}
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.body}
              />

              <Text style={styles.secondquestion}>What do you think needs more improvement when it comes to 
              budgeting apps?</Text>
              <TextInput
              multiline
              style={styles.secondinput}
              onChangeText={formikprops.handleChange('secondbody')}
              value={formikprops.values.secondbody}
              />

              <Text style={styles.thirdquestion}>Would you be interested in using the 50/30/20 and Zero-based budgeting methods in one app?</Text>
              <TextInput
              multiline
              style={styles.thirdinput}
              onChangeText={formikprops.handleChange('secondbody')}
              value={formikprops.values.thirdbody}
              />
              
              <TouchableOpacity 
              title='submit' 
              //gets the values for title & body
              onPress={formikprops.handleSubmit}
              style={styles.button}
              >
                <Text style={styles.submit}> Submit</Text>
              </TouchableOpacity>
            </View>
          )}
          </Formik>

          

        </View>
        
    );
}

export default Home