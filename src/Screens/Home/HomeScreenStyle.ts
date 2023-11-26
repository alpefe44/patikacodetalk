import { StyleSheet } from "react-native";
import Colors from "../../Colors";



export default StyleSheet.create({
    bodyContainer: {
        flex : 1,
        alignItems:'center'
    },
    footerContainer: {
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        margin:15,
        borderRadius:50,
        backgroundColor:Colors.orange,
        width:80,
        height:80,
    }
})