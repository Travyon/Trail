import React, {ReactElement, useEffect, useState}from "react";
import {Pressable, View ,Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from "./styles";


const UserLogin = (props) => {
    const{ title = 'Login'} = props;
    //Will retrieve the email when user is logging in
    const [email, setEmail] = useState('')

    //Will retrieve the password when user is logging in
    const [password, setPassword] = useState('')
    
    //Allows for navigation to be used in this component
    const navigation = useNavigation()
    useEffect(()=> {
    //Authenticates the user
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user)
        {navigation.navigate('Home')}
     })
     return unsubscribe
    }, [])


        return(
        <>
            <View style={styles.container}>
                <View style={styles.color}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                    style={styles.input}
                    placeholder={"Email"}
                    value={email}
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
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text style={styles.text}>{title}</Text>
                    </Pressable>
                </View>
    
            </View>
        </>
        )
    }
    
    export default UserLogin;