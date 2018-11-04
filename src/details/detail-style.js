import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:5
    },
    imageStyle:{
       // width:10,
        height: 100,
        flex:.4
    },
details:{
    flex:.7,
    marginLeft: 10
},
detailsTitle:{
    fontSize:17,
    fontWeight: "600",
    color:'#333'
},
buttonStyle:{
    backgroundColor:'#ffe724',
    width:90,
    padding:10,
    borderRadius:5,
    alignItems: 'center', 
    alignSelf: 'flex-end'
},
buttonText:{
    color:'#333'
}
});
