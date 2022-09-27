import React from "react";
import  {Text, View, TextInput} from 'react-native';
import styles from './styles';

const TextField = (props) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
            />
        </View>
    )
}

export default TextField;
