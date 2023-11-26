import { StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    textInput: {
        marginHorizontal: 10,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor:'white'
    }
})