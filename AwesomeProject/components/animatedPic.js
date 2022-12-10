import { useRef } from "react";
import { ImageBackground, Animated, View, StyleSheet, Text, Image, FlatList, SafeAreaView, Button } from "react-native"


const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 200,
    },
});


export const AnimatedPic = () => {

    const spinValue = new Animated.Value(0);

    const buttonadw = () => {
        console.log('awdawd')
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
    }


    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const images = [
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    ]

    const Item = ({ item }) => {
        return (
            <SafeAreaView>
                {/* <View style={styles.container}>
                    <ImageBackground
                        source={{ uri: item }}
                        resizeMode="cover"
                        style={{ alignItems: 'center', justifyContent: 'center', height: '110%', width: "100%" }}
                        blurRadius={30}
                    >

                        <Image
                            source={{ uri: item }}
                            style={{ width: '70%', height: '70%' }}
                        />
                    </ImageBackground>
                </View> */}
                <Animated.View
                    style={[
                        styles.container,
                        {
                            transforms: [{ rotate: spin }]
                        }
                    ]}
                // onScroll={Animated.event(
                //     // scrollX = e.nativeEvent.contentOffset.x
                //     [{
                //         nativeEvent: {
                //             contentOffset: {
                //                 x: scrollX
                //             }
                //         }
                //     }]
                // )}
                >
                    <Image
                        source={{ uri: item }}
                        style={{ width: '70%', height: '70%' }}
                    />
                </Animated.View>
                <Button title="rotate" onPress={buttonadw} />
            </SafeAreaView>
        )
    }


    return (
        <View>
            <FlatList
                horizontal
                data={images}
                renderItem={Item}
            />
        </View>
    )
}