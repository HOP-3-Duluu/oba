import React from "react";
import { Text, View } from "react-native";
import LottieView from 'lottie-react-native';


export const ProfileScreen = ({ navigation, route }) => {


    let name = route.params.name

    return (
        <View>
            <Text>This is {name}'s profile</Text>
            <Text>Hello {name}</Text>
        </View>
    )
};