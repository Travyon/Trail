import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row'
    },

    lineView:{
        backgroundColor: 'white', 
        height: 1, 
        flex: 1, 
        alignSelf: 'center',
        marginTop: 25
        
    },

    lineText:{
        alignSelf:'center', 
        paddingHorizontal:5, 
        fontSize: 24,
        color: 'white',
        marginTop: 25,
        fontWeight:'400'
    },

    lineStyle:{
        backgroundColor: 'white', 
        height: 1, 
        flex: 1, 
        alignSelf: 'center', 
        marginTop: 25
    }



});

export default styles;