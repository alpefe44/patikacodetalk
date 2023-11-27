import { View, Text, Dimensions, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import Colors from '../../Colors';
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackNav } from '../../Navigation/Navigator';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNav>>();

    function handleSubmit(values: any) {
        console.log(values.email, values.password)
        if (values.email == "" || values.password == "") {
            Alert.alert("Boş Bırakamazsın!!")
        } else {
            signIn(values.email, values.password)
        }

    }

    function goToRegister() {
        navigation.replace('RegisterScreen')
    }

    function signIn(email: string, password: string) {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert("giris yapıldı")
                navigation.replace('HomeScreen')
            })
            .catch((error) => console.log(error))
    }

    return (
        <KeyboardAvoidingView style={{ height: height, backgroundColor: Colors.orange }} behavior={Platform.OS === 'android' ? 'position' : 'height'}>
            <View style={{ height: height * .5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white' }}>codetalk</Text>
            </View>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View style={{ padding: 5, gap: 10 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Email</Text>
                            <CustomTextInput placeholder='Email' value={values.email} onChangeText={handleChange('email')}></CustomTextInput>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Password</Text>
                            <CustomTextInput placeholder='Password' value={values.password} onChangeText={handleChange('password')}></CustomTextInput>
                        </View>
                        <CustomButton theme='secondary' title='Giriş Yap' onPress={() => handleSubmit()}></CustomButton>
                        <CustomButton theme='primary' title='Kayıt ol' onPress={goToRegister}></CustomButton>
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    )
}




export default LoginScreen