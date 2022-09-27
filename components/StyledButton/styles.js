import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    container:{
        width: '100%',
        padding: 10,
    
    },

    button: {
        height: 40,
        //aligns to the main axis of direction
        justifyContent: "center",
        alignItems: 'center',
        //Determines the button shape
        borderRadius: 20,
        marginTop: 55

    },

    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: "uppercase"
        
    }
});

export default styles;
