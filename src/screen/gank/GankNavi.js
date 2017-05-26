import React, {Component} from 'react';

import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Android from './GankAndroid'
import Meizi from './GankMeizi'

const GankNavi = TabNavigator({
    Meizi: {
        screen: Meizi,
        navigationOptions: {
            tabBarLabel: 'Meizi'
            /*tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? imgOneAcitve
                : imgOne}
                style={styles.tabImg}/>)*/
        }
    },
    Android: {
        screen: Android,
        navigationOptions: {
            tabBarLabel: 'Android'
            /*tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? imgReadActive
                : imgRead}
                style={styles.tabImg}/>)*/
        }
    }
}, {
    lazy: true,
    initialRouteName: 'Meizi',
    tabBarPosition: 'top', //tabbar放在底部
    swipeEnabled: false, //不能滑动切换
    animationEnabled: true, //不要切换动画
    tabBarOptions: {
        style: {
            height: 50,
            borderTopWidth: 0.5,
            borderColor: '#DDDDDD',
            backgroundColor: '#FFFFFF'
        },
        showLabel: true, //不显示文字
        showIcon: false, //显示icon
        labelStyle:{
            color:"#3F51B5"
        },
        indicatorStyle: {
            height: 0
        }
    }
});

const styles = StyleSheet.create({
    tabImg: {
        height: 50,
        width: 50
    }
});

export default GankNavi;
