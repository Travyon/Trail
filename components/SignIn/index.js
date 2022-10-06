import React from 'react';
import {View, Button, Text, Pressable} from 'react-native';
import styles from './styles';

const SignIn = (props) => {
    const {onPress, type} = props;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    return (
        <View>
            <Pressable style=
            //Array is used to merge 2 styles together
            {[styles.button, {backgroundColor: backgroundColor} ]} 
            //function called everytime users press the screen
            onPress={()=> onPress()}>
                
            </Pressable>
        </View>
    )
}

export default SignIn