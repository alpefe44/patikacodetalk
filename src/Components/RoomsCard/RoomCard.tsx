import { View, Text } from 'react-native'
import React from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'
type Props = {
    item: any
}

const RoomCard = (props: Props) => {

    console.log(props.item, "roomcarditem")

    const calculateTimeAgo = formatDistanceToNow(parseISO(props.item.date), { addSuffix: true , locale : tr });


    return (
        <View style={{ marginHorizontal: 15, paddingVertical: 10, backgroundColor: 'white', borderRadius: 20, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <Text>{props.item.name}</Text>
                <Text>{calculateTimeAgo}</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text>{props.item.content}</Text>
            </View>
        </View>
    )
}

export default RoomCard