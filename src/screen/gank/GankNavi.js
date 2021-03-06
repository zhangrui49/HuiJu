import React from "react";

import {StyleSheet} from "react-native";

import {TabNavigator} from "react-navigation";

import GankAndroid from "./GankAndroid";
import Ios from "./GankIos";
import Meizi from "./GankMeizi";

const GankNavi = TabNavigator({
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



const styles = StyleSheet.create({
    tabImg: {
        height: 50,
        width: 50
    }
});

export default GankNavi;
