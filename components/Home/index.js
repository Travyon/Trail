import React, { useState } from "react";
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';


const Home = (props) =>{


    return(
        <View style={styles.titleContainer}>
  
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Trail</Text>
            <Text style={styles.question}>How can we make Trail more cost-efficient? </Text>
            
          </View>
          <Formik 
          initialValues={{ body: ''}}
          onSubmit={(values)=>{
            console.log(values);
          }}
          >
          {(formikprops) => (
            <View>
              <TextInput
              style={styles.input}
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.title}
              />
              <TextInput
              multiline
              style={styles.input}
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.body}
              />
              
              <TouchableOpacity 
              title='submit' 
              //gets the values for title & body
              onPress={formikprops.handleSubmit}
              />
            </View>
          )}
          </Formik>

          

        </View>
    );
}

export default Home