import { View, Text, Dimensions, Alert , KeyboardAvoidingView , Platform } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import Colors from '../../Colors'
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackNav } from '../../Navigation/Navigator';

const { width, height } = Dimensions.get('window');




const RegisterScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNav>>()

    function createAccount(email: string, password: string) {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert("user account create and sign in")
                navigation.navigate('HomeScreen')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            })
    }


    function handleSubmit({ email, password }: any) {
        createAccount(email, password)
    }
    return (
        <KeyboardAvoidingView style={{ height: height, backgroundColor: Colors.orange }} behavior={Platform.OS === 'android' ? 'position' : 'height'}>
            <View style={{ height: height * .5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white' }}>codewalk</Text>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
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
                        <CustomButton theme='primary' title='Kayıt Ol' onPress={handleSubmit} ></CustomButton>
                        <CustomButton theme='secondary' title='Back' onPress={() => navigation.goBack()}></CustomButton>
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen