import { Button, View, TextInput, StyleSheet, Alert, Text } from "react-native";
import React, { useState } from "react";
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const HomeScreen = ({ navigation, names }) => {


    const setToken = async () => {
        await AsyncStorage.setItem('auth_token', "obaaaabn")
    }
    const getToken = async () => {
        const token = await AsyncStorage.getItem('auth_token')
        Alert.alert(token)
    }


    return (
        <View>
            <LottieView
                source={require('../lotties/loader-cat.json')}
                autoPlay={true}
                autoSize={true}
            />
            <Button title='Set Token' onPress={async () => await setToken()} />
            <Button title='Get Token' onPress={async () => await getToken()} />
        </View>
    )
};

const styles = StyleSheet.create({

});