import { Center } from "native-base";
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
   
    titleContainer:{
        width: '100%',
        height: '100%'
    },
        
    titles: {
        marginTop:'15%',
        width:'100%',
        alignItems: 'center'
    },
    title:{
        fontSize: '50px',
        fontWeight: '200',
        color: 'white',
        marginTop: 20
    },
    subtitle:{
        fontSize: '20px',
        fontWeight: '200',
        color: 'white',
        marginTop: 30
    },

    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        position: 'absolute',

    },
    choiceone:{
        backgroundColor: 'white',
        marginTop: 30,
        marginRight: 50,
        marginLeft: 50,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center'
    },
    choicetext:{
      textAlign: 'center',
      fontSize: 20
         
    } ,
    choicetwo:{
        backgroundColor: 'white',
        marginTop: 50,
        marginRight: 50,
        marginLeft: 50,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center'
    },
    secondchoicetext:{
        textAlign: 'center',
        fontSize: 20
    }
        
    



      






});

export default styles;