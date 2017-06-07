import React from "react";

import {Image, ScrollView, Text, View} from "react-native";

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
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: (props) => (
        <ScrollView style={{width: 220}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image source={require('../image/head.png')}
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
        initialRouteName: 'MeiPai', // 默认页面组件
        activeTintColor: '#F44336', // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#F44336', // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {},
        navigationOptions: {
            headerTintColor: '#51c4fe',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    }
});

export default Drawer;