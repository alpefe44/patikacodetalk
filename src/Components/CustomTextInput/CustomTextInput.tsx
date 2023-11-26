import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './CustomTextInputStyle'

type Props = {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void

}

const CustomTextInput = (props: Props) => {
    return (
        <>
            <TextInput placeholderTextColor={'white'} value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.textInput} ></TextInput>
        </>
    )
}

export default CustomTextInput