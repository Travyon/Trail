import React from "react";
import {View, Text} from 'react-native';
import styles from "./styles";



const HorizontalLine = () => {
return(
<View style={styles.container}>
    <View style={styles.lineView} />
    <Text style={styles.lineText}>Or</Text>
    <View style={styles.lineStyle} />
</View>

)
}

export default HorizontalLine;