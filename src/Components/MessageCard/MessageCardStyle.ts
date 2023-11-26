import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Colors";
const { width, height }: any = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: width * .3,
        height: height * .13,
        padding: 10,
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        margin: 10,
        elevation: 15
    },
    text : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:14, 
        color : 'white',
        textAlign:'center'
    }
})