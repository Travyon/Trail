import React from "react";
import  {Text, Pressable, View} from 'react-native';
import styles from './styles';
import HorizontalLine from "../HorizontalLine";

const StyledButton = (props) => {
    const {type, content, onPress} = props;

    /**
     * if the type of the background color is primary then the color should 
     * be black, otherwise it will be white
     */
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';
  


    return(
        <View styles= {styles.container}>
            <Pressable style=
            //Array is used to merge 2 styles together
            {[styles.button, {backgroundColor: backgroundColor} ]} 
            //function called everytime users press the screen
            onPress={()=> onPress()}>
        
            <Text style= {[styles.text, {color: textColor}]}>{content}</Text>

            </Pressable>
            <HorizontalLine/>
            


        </View>


    )
};

export default StyledButton;
