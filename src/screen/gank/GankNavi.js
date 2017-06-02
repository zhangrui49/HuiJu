import React from 'react';

import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

import {TabNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';

import GankAndroid from './GankAndroid'
import Ios from './GankIos'
import Meizi from './GankMeizi'
import Aipai from '../Aipai'
import Douban from '../Douban'
import Zhihu from '../zhihu/Zhihu'

const GankNavi = TabNavigator({
    Meizi: {
        screen: Meizi,
        navigationOptions: {
            tabBarLabel: 'Meizi'
            /*tabBarIcon: ({focused, tintColor}) => (<Imageiew
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


const Drawer = DrawerNavigator({
    Zhihu: {
        screen: Zhihu,
        navigationOptions:{
            title:"知乎"
        }
    },
    Gank: {
        screen: GankNavi,
        navigationOptions:{
            title:"干货"
        }
    },
    Aipai: {
        screen: Aipai,
        navigationOptions:{
            title:"爱拍"
        }
    },
    Douban: {
        screen: Douban,
        navigationOptions:{
            title:"豆瓣"
        }
    },
}, {
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: (props) => (
        <ScrollView style={{width: 220}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image source={require('../../image/head.png')}
                       style={{width: 60, height: 60, justifyContent: 'center', marginLeft: 15, marginTop: 10}}/>
                <Text style={{
                    fontSize: 18,
                    color: '#F44336',
                    justifyContent: 'center',
                    height: 40, marginLeft: 20, marginTop: 5
                }}>汇聚</Text>
                <Text style={{
                    fontSize: 16,
                    color: '#F44336',
                    justifyContent: 'center',
                    height: 40, marginLeft: 20
                }}>429835306@qq.com</Text>
                <DrawerItems {...props}/>
            </View>
        </ScrollView>
    ),
    contentOptions: {
        initialRouteName: Zhihu, // 默认页面组件
        activeTintColor: '#F44336', // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#F44336', // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {}
    }
});
const styles = StyleSheet.create({
    tabImg: {
        height: 50,
        width: 50
    }
});

export default Drawer;
