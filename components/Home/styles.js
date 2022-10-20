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
    question:{
        fontSize: '20px',
        fontWeight: '400',
        color: 'white',
        marginTop: 40,
        marginLeft: 20
    },
    secondquestion:{
        fontSize: '20px',
        fontWeight: '400',
        color: 'white',
        marginTop: 50,
        marginLeft: 20
    },
    thirdquestion:{
        fontSize: '20px',
        fontWeight: '400',
        color: 'white',
        marginTop: 60,
        marginLeft: 20
    },


    button:{
        borderRadius: 10
    },
    input: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 18,
        borderRadius: 5,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    secondinput: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 18,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5
    },
    thirdinput: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 18,
        borderRadius: 5,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    
    submit:{
        marginTop: 90,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#DDDDDD',
        alignSelf: 'center',
        borderRadius: '10'
        
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        position: 'absolute',
    

    }
      






});

export default styles;