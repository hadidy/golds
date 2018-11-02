import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#ffe724',
     
    },
    iconsContainer:{
      flex: .2,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 150,
      backgroundColor:'rgba(0,0,0,.2)',
      alignItems: 'center'
    },
    logoContainer:{
      flex: .8,
      flexDirection: 'row',
      padding:10,
      alignItems:'center',
      justifyContent:'center'
    },
    iconStyle:{
      height: 10,
      height: 10,
      marginLeft:20,
      paddingLeft:0
    },
    logo: {
      color:'#333',
      fontSize:70,
      fontFamily:'Helvetica, sans-serif'
    }
});
 