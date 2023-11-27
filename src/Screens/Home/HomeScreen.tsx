import { View, Pressable, FlatList, Text, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './HomeScreenStyle'
import CustomModal from '../../Components/CustomModal/CustomModal'
import { PushRoom } from '../../DatabaseActions/DataBaseActions'
import parseContentData from '../../utils/parseContentData'
import database from '@react-native-firebase/database'
import MessageCard from '../../Components/MessageCard/MessageCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackNav } from '../../Navigation/Navigator'
import auth from '@react-native-firebase/auth'


type Props = {}

const HomeScreen = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNav>>()

    const [visible, setVisible] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');

    const [data, setData] = React.useState<any>([]);

    const logOut = async () => {
        auth().signOut()
            .then(() => console.log("Çıkış Yapıldı"))

        navigation.replace('LoginScreen');
    }

    function getDatabase() {
        const referance = database().ref('classes/rooms');
        referance.on('value', snapshot => {
            if (snapshot.val()) {
                const contentData = snapshot.val()
                const parsedData = parseContentData(contentData)
                setData(parsedData)
            } else {
                return
            }

        })
    }

    function addClass() {
        if (value?.replace(/\s/g, "").length > 0) {
            PushRoom(value)
            setVisible(false)
        } else {
            Alert.alert("Değer Girmek Zorundasın BOŞ BIRAKAMAZSIN!!!")
        }

    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => {
                    logOut()
                }}>
                    <Icon name='logout' size={24}></Icon>
                </Pressable>
            )
        })
    })

    React.useEffect(() => {
        getDatabase();
    }, [])

    const renderItem = ({ item }: any) => {
        return (
            <MessageCard item={item}></MessageCard>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.bodyContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.footerContainer}>
                <Pressable onPress={() => setVisible(!visible)}>
                    <Icon name='plus' size={32} color={'white'}></Icon>
                </Pressable>
            </View>
            <View>
                <CustomModal value={value} setValue={setValue} setModalVisible={setVisible} isVisible={visible} onPress={() => addClass()}></CustomModal>
            </View>

        </View>
    )
}

export default HomeScreen