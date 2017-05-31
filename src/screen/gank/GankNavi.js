import React, {Component} from 'react';

import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {TabNavigator,DrawerNavigator} from 'react-navigation';

import GankAndroid from './GankAndroid'
import Ios from './Ios'
import Meizi from './GankMeizi'
import Aipai from '../Aipai'
import Douban from '../Douban'
import Zhihu from '../Zhihu'

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
        screen: GankAndroid,
        navigationOptions: {
            tabBarLabel: 'Android'
            /*tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? imgReadActive
                : imgRead}
                style={styles.tabImg}/>)*/
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
        labelStyle: {
            color: "#3F51B5"
        },
        indicatorStyle: {
            height: 0
        }
    }
});


const Drawer = DrawerNavigator({
    Gank: {
        screen: GankNavi
    },
    Aipai: {
        screen: Aipai
    },
    Douban: {
        screen: Douban
    },
    Zhihu: {
        screen: Zhihu
    }
}, {
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: GankNavi, // 默认页面组件
        activeTintColor: '#008AC9', // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000', // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {

        }
    }
});


const styles = StyleSheet.create({
    tabImg: {
        height: 50,
        width: 50
    }
});

export default Drawer;
