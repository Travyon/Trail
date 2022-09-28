import React from "react";
import  {Text, View, TextInput} from 'react-native';
import styles from './styles';

const TextField = (props) => {
    const type = props.type;
    const marginTop = type === 'primary' ? '5%' : '5%'; 
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder={"Username"}
            />

            <TextInput 
            style={[styles.input, {marginTop:marginTop}]}
            placeholder={"Password"}
            />
        </View>
    )
}

export default TextField;
