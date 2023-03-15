import React, { useState } from "react";
import { Pressable, View, Text, TextInput } from 'react-native';
import styles from "./styles";
import { auth } from "../../../../firebase";

const CreateAccount = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onPress, title = 'Sign Up' } = props;
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered With:', user.email);
            })
            .catch(error => alert(error.message))
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.color}>
                    <Text style={styles.title}> Create Account</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        placeholder={"Email"}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize={"none"}
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        placeholder={"Password"}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <Pressable style={styles.button} onPress={handleSignUp} >
                        <Text style={styles.text}>{title}</Text>
                    </Pressable>
                </View>

            </View>
        </>
    )
}

export default CreateAccount;