//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

// create a component
class Aipai extends Component {
    static navigationOptions = {
        drawerLabel: '爱拍',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('../image/aipai.png')} style={{width:20,height:20}}/>
        ),
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Aipai Screen</Text>
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
export default Aipai;
