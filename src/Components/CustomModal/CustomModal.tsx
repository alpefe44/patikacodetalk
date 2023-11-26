import { View, Text, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import CustomButton from '../CustomButton';

type Props = {
    isVisible: boolean,
    setModalVisible: (value: boolean) => void,
    onPress: () => void,
    value: string | undefined,
    setValue: (text: string) => void | undefined
}

const { width, height } = Dimensions.get('window');

const CustomModal = (props: Props) => {

    return (
        <Modal onBackdropPress={() => props.setModalVisible(false)} isVisible={props.isVisible} style={{ justifyContent: 'flex-end', margin: 0, marginHorizontal: 15 }}>
            <View style={{ height: height * .4, backgroundColor: 'white', borderRadius: 10 }}>
                <View style={{ flex: .9 }}>
                    <TextInput inputMode='text' value={props.value} onChangeText={props.setValue} placeholder='...' style={{ padding: 8, fontSize: 22 }}></TextInput>
                </View>
                <CustomButton title='Ekle' theme='primary' onPress={props.onPress}></CustomButton>
            </View>
        </Modal>
    )
}

export default CustomModal