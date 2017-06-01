//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
class Douban extends Component {

    static navigationOptions = {
        drawerLabel: '豆瓣',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('../image/video.png')} style={{width:20,height:20}}/>
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Douban Screen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Douban;
