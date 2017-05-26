//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GankNavi from './GankNavi'

class Gank extends Component {
    render() {
        return (
          	<GankNavi
				screenProps={{appNavigation: this.props.navigation,}}
				style={{flex: 1,}}/>
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
export default Gank;
