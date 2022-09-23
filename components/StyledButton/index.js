import React from "react";
import  {Text, Pressable, View} from 'react-native';
import styles from './styles';

const StyledButton = () => {
    return(
        <View styles= {styles.container}>
            <Pressable style={styles.button} 
            //function called everytime users press the screen
            onPress={()=> { console.warn('Welcome')}}>
            
            <Text style= {styles.text}>Create Account</Text>

            </Pressable>
        </View>


    )
};

export default StyledButton;
