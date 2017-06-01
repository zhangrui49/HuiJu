//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
class Zhihu extends Component {
    static navigationOptions = {
        drawerLabel: '知乎',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('../image/zhihu.png')} style={{width:20,height:20}}/>
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Zhihu Screen</Text>
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
export default Zhihu;
