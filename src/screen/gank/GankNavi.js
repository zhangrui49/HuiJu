import React, {Component} from 'react';

import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Android from './GankAndroid'
import Meizi from './GankMeizi'
const GankNavi = TabNavigator({
    Meizhi: {
        screen: Meizi,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? imgOneAcitve
                : imgOne}
                style={styles.tabImg}/>)
        }
    },
    Android: {
        screen: Android,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? imgReadActive
                : imgRead}
                style={styles.tabImg}/>)
        }
    }
}, {
    lazy: true,
    initialRouteName: 'One',
    tabBarPosition: 'bottom', //tabbar放在底部
    swipeEnabled: false, //不能滑动切换
    animationEnabled: false, //不要切换动画
    tabBarOptions: {
        style: {
            height: 50,
            borderTopWidth: 0.5,
            borderColor: '#DDDDDD',
            backgroundColor: '#FFFFFF'
        },
        showLabel: false, //不显示文字
        showIcon: true, //显示icon
        indicatorStyle: {
            height: 0
        }
    }
});

const styles = StyleSheet.create({
	tabImg: {
		height: 50,
		width: 50,
	},
});

export default GankNavi;
