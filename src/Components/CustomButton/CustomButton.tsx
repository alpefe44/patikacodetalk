import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CustomButtonStyle'

type Props = {
    title: string,
    onPress: () => void | undefined , 
    theme: 'primary' | 'secondary'
}

const CustomButton = (props: Props) => {
    return (
        <>
            <Pressable style={styles[props.theme].button} onPress={props.onPress}>
                <Text style={styles[props.theme].text}>{props.title}</Text>
            </Pressable>
        </>
    )
}

export default CustomButton