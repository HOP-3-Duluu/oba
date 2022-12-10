import SplashScreen from 'react-native-splash-screen';
import React, { useState, useEffect } from 'react';
import type { Node } from "react"
import { HomeScreen } from "./components/homeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { ProfileScreen } from "./components/profileScreen"
import HomeIcon from './svg_components/homeIcon';
import UserIcon from './svg_components/userIcon';
import {AnimatedPic} from './components/animatedPic';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';



// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  useEffect(() => {
    SplashScreen.hide();
  }, []);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let name = []

  return (
    // <SafeAreaView style={backgroundStyle}>
    // <View>
    //     <ScrollView>
    //       <Button title='black' color={active ? '#000000' : "#004400"} />
    //       <Button title='orange' onPress={() => setactive(!active)} color='orange' />
    //     </ScrollView>
    //   </View>
    // </SafeAreaView>



    <NavigationContainer>



      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Welcome' }}
        >
          {props => <HomeScreen {...props} names={[...name]} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator> */}


      <Tab.Navigator>
        {/* <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <HomeIcon />
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ name: 'Test' }}
          options={{
            tabBarIcon: () => <UserIcon />
          }}
        ></Tab.Screen> */}
        <Tab.Screen
          name="Animated Pics"
          component={AnimatedPic}
          options={{
            tabBarIcon: () => <UserIcon />
          }}
          ></Tab.Screen>
      </Tab.Navigator>


    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

})

export default App;
