import React from "react";

import {Image, ScrollView, Text, View, StyleSheet} from "react-native";

import {DrawerItems, DrawerNavigator} from "react-navigation";

import MeiPai from "./meipai/MeiPai";
import Douban from "./douban/Douban";
import Gank from "./gank/GankNavi";
import Zhihu from "./zhihu/Zhihu";

const Drawer = DrawerNavigator({
    MeiPai: {
        screen: MeiPai,
        navigationOptions: {
            title: "美拍",
            titleColor: 'green',
            color: 'green'
        }
    },
    Zhihu: {
        screen: Zhihu,
        navigationOptions: {
            title: "知乎"
        }
    },
    Gank: {
        screen: Gank,
        navigationOptions: {
            title: "干货"
        }
    },
    Douban: {
        screen: Douban,
        navigationOptions: {
            title: "豆瓣"
        }
    },
}, {
    drawerWidth: 220,
    drawerPosition: 'left',
    contentComponent: (props) => (
        <ScrollView style={{width: 220}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image source={require('../image/head.png')}
                       style={styles.head}/>
                <Text style={styles.text_title}>汇聚</Text>
                <Text style={styles.text_email}>429835306@qq.com</Text>
                <DrawerItems {...props}/>
            </View>
        </ScrollView>
    ),
    contentOptions: {
        initialRouteName: 'MeiPai', // 默认页面组件
        activeTintColor: '#F44336', // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#F44336', // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        navigationOptions: {
            headerTintColor: '#51c4fe',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    }
});

export default Drawer;

const styles = StyleSheet.create({
    text_email: {
        fontSize: 16,
        color: '#F44336',
        justifyContent: 'center',
        height: 40,
        marginLeft: 20
    },
    text_title: {
        fontSize: 18,
        color: '#F44336',
        justifyContent: 'center',
        height: 40,
        marginLeft: 20,
        marginTop: 5
    },
    head: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 10
    }
});