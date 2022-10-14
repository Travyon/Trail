import React, {ReactElement, useEffect, useState}from "react";
import {Pressable, View ,Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { auth } from "../../firebase";
import styles from "./styles";


const UserLogin = (props) => {
    const{ title = 'Login'} = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    useEffect(()=> {
     const unsubscribe = auth.onAuthStateChanged(user => {
        if (user){
           navigation.navigate('Home')
        }
     })
     return unsubscribe
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);  
        })
        .catch(error => alert(error.message))
    }


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