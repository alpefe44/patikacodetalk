import { View, Text, Button, Pressable, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../Colors'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import RoomCard from '../../Components/RoomsCard/RoomCard'
import CustomModal from '../../Components/CustomModal/CustomModal'
import { RoomParse } from '../../utils/parseContentData'
import styles from './RoomScreenStyles'
import { PushMessages } from '../../DatabaseActions/DataBaseActions'

type Props = {}

const RoomScreen = (props: Props) => {
    const route = useRoute();
    const { id }: any = route.params;


    const [visible, setVisible] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const [data, setData] = useState<any>([])

    function getDatabase() {
        const referance = database().ref(`classes/rooms/${id}/messages`);
        referance.on('value', snapshot => {
            const contentData = snapshot.val()
            const parsedData = RoomParse(contentData)
            setData(parsedData)
        })
    }

    function PushMessage() {
        if (value?.replace(/\s/g, "").length > 0) {
            PushMessages(id, {
                name: auth().currentUser?.email,
                content: value
            })
            setVisible(false)
            setValue("")
        } else {
            Alert.alert("Değer Girmek Zorundasın !!!")
        }

    }

    React.useEffect(() => {
        getDatabase();
    }, [id])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.yellow }}>
            <View style={{ borderWidth: 2, borderColor: Colors.orange, width: '80%', margin: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10, borderStyle: 'dotted' }}>
                <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{id}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <RoomCard item={item}></RoomCard>}
                >
                </FlatList>
            </View>
            <View style={styles.footerContainer}>
                <Pressable onPress={() => setVisible(!visible)}>
                    <Icon name='plus' size={32} color={'white'}></Icon>
                </Pressable>
            </View>
            <View>
                <CustomModal value={value} setValue={setValue} setModalVisible={setVisible} isVisible={visible} onPress={() => PushMessage()}></CustomModal>
            </View>
        </View>
    )
}

export default RoomScreen