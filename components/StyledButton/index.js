import React from "react";
import  {Text, Pressable, View} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const type = props.type;
    /**
     * if the type of the background color is primary then the color should 
     * be black, otherwise it will be white
     */
    const backgroundColor = type === 'primary' ? 'black' : 'white';
  


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
