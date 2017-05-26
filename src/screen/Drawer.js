import React, {Component} from "react";

import {Button, Image, View, Text, StyleSheet} from 'react-native';

import {DrawerNavigator} from 'react-navigation';

import Aipai from './Aipai'
import Douban from './Douban'
import Gank from './gank/Gank'
import Zhihu from './Zhihu'

const Drawer = DrawerNavigator({
    Gank: {
        screen: Gank,
    },
    Aipai: {
        screen: Aipai,
    },
        Douban: {
        screen: Douban,
    },
        Zhihu: {
        screen: Zhihu,
    },
},{
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Gank, // 默认页面组件
        activeTintColor: '#008AC9',  // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

export default Drawer;