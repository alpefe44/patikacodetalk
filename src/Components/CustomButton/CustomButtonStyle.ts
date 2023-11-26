import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const base_style = StyleSheet.create({
    button: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.secondaryOrange,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        button: {
            ...base_style.button
        },
        text: {
            ...base_style.text,
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        button: {
            ...base_style.button,
            backgroundColor: 'white'
        },
        text: {
            ...base_style.text,
            color: Colors.orange
        }

    })

}