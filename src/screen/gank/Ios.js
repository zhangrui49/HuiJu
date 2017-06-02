//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GankTab from './GankTab'
// create a component
class Ios extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GankTab url={'http://gank.io/api/data/iOS/20/page'}>IOS</GankTab>
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
export default Ios;
