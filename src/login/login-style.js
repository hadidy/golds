import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    textInputStyle: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius:20,
      marginBottom:30,
      marginLeft:30,
      marginRight:30,
      paddingLeft:20,
      paddingRight:20,
      color:'#fff'
    },
    textInputsContainer:{
        marginTop:50

    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },
    loginContainer:{
        flex: 1,
        width: null,
        height: null,
        backgroundColor:'#000',
        opacity:.7
    },
    buttonText: {
        alignSelf: 'center',
        color: '#dce604',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 30,
        marginLeft: 30,
        height:45
    },
    logo:{
        alignSelf: 'center',
        height:140,
        width:140,
        marginTop:120
    }
});