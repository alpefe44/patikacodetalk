import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home/HomeScreen'
import RegisterScreen from '../Screens/Register/RegisterScreen'
import LoginScreen from '../Screens/Login/LoginScreen'
import Colors from '../Colors'
import RoomScreen from '../Screens/Room/RoomScreen'



export type RootStackNav = {
    LoginScreen: undefined,
    RegisterScreen: undefined
    HomeScreen: undefined,
    RoomScreen: {
        id: any
    }
}


const RootStack = createNativeStackNavigator<RootStackNav>()

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='HomeScreen'>
                <RootStack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} ></RootStack.Screen>
                <RootStack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }}></RootStack.Screen>
                <RootStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerTintColor: Colors.orange, headerTitle: 'Odalar', headerTitleAlign: 'center', headerBackVisible: false }}></RootStack.Screen>
                <RootStack.Screen name='RoomScreen' component={RoomScreen} options={{ headerTintColor: Colors.orange, headerTitle: 'Odalar', headerTitleAlign: 'center' }}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer >
    )
}

export default Navigator