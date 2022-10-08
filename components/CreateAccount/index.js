import React, {FC, ReactElement, useState }from "react";
import {Pressable, View ,Text, TextInput} from 'react-native';
import styles from "./styles";
import Parse from "parse/react-native";

const CreateAccount = (props) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const{ onPress, title = 'Sign Up'} = props;
    return(
    <>
        <View style={styles.container}>
            <View style={styles.color}>
                <Text style={styles.title}> Create  Account</Text>
                <TextInput
                style={styles.input}
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
                />
                <TextInput
                style={styles.input}
                value={password}
                placeholder={"Password"}
                onChangeText={(text) => setPassword(text)}
                />
                <Pressable style={styles.button}  onPress={() => {onPress}} >
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>

        </View>
    </>
    )
}

export default CreateAccount;