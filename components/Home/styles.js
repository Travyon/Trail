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
        color: 'black',
        marginTop: 20
    },
    picker:{
        height:50,
        width:150,
        marginTop: 8
    },
    question:{
        fontSize: '20px',
        fontWeight: '200',
        color: 'black',
        marginTop: 30
    },
    button:{
        marginTop: 150,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#DDDDDD'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        borderRadius: 3,
        marginTop: 100,
        marginRight: 20,
        marginLeft: 20
    }
      






});

export default styles;