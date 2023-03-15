import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
    },

    title:{
        marginTop: 185,
        fontSize: '30px',
        fontWeight: '700',
        textAlign: 'center'
    },
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
        marginLeft: 160
    },
    button: {
        height: 40,
        //aligns to the main axis of direction
        justifyContent: "center",
        alignItems: 'center',
        //Determines the button shape
        borderRadius: 20,
        marginTop: 55,
        backgroundColor: 'black',
        marginLeft: 50,
        marginRight: 50

    },

    text:{
        color: 'white'
    }

})

export default styles;