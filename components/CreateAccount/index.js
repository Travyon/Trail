import React from "react";
import {View ,Text} from 'react-native';
import styles from "./styles";

const CreateAccount = () => {
    return(
        <View style={styles.container}>
            <View style={styles.color}>
                <Text style={styles.title}> Create  Account</Text>
            </View>

        </View>
    )
}

export default CreateAccount;