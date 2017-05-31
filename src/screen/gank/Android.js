//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GankTab from './GankTab'
// create a component
class Android extends Component {
    
    static navigationOptions = {
        title: 'Android', //设置标题内容
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <GankTab url={'http://gank.io/api/data/Android/20/page'}>Android</GankTab>
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
export default Android;
