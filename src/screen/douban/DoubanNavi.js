/**
 * Created by zhangrui on 2017/6/2.
 */
import React from 'react';

import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

import {TabNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';

import GankAndroid from './GankAndroid'
import Ios from './GankIos'
import Meizi from './GankMeizi'


const DoubanNavi = TabNavigator({
    Meizi: {
        screen: Meizi,
        navigationOptions: {
            tabBarLabel: 'Meizi'
        }
    },
    Android: {
        screen: GankAndroid,
        navigationOptions: {
            tabBarLabel: 'Android'
        }
    },
    IOS: {
        screen: Ios,
        navigationOptions: {
            tabBarLabel: 'Ios'
        }
    }
}, {
    lazy: true,
    initialRouteName: 'Meizi',
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        style: {
            height: 50,
            borderTopWidth: 0.5,
            borderColor: '#DDDDDD',
            backgroundColor: '#FFFFFF'
        },
        showLabel: true,
        showIcon: false,
        labelStyle: {
            color: "#3F51B5"
        },
        indicatorStyle: {
            height: 0
        }
    }
});


export default DoubanNavi;
