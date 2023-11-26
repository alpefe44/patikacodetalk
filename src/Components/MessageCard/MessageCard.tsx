import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './MessageCardStyle'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackNav } from '../../Navigation/Navigator'

type Props = {
  item: any
}

const MessageCard = (props: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackNav>>()

  return (
    <Pressable style={styles.container} onPress={() => {
      navigation.navigate('RoomScreen', {
        id: props.item.id
      })
    }}>
      <Text style={styles.text}>{props.item.id}</Text>
    </Pressable>
  )
}

export default MessageCard