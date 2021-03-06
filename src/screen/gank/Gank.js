//import liraries
import React, {Component} from 'react';
import {Button, Image, View, Text, StyleSheet} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import GankNavi from './GankNavi'
import Aipai from '../meipai/MeiPai'
import Douban from '../douban/Douban'
import Zhihu from '../zhihu/Zhihu'

class Gank extends Component {

    static navigationOptions = {
        title: 'Gank', //设置标题内容
    }

    constructor(props) {
        super(props);
    }

    render() { // 此方法的tab里,不能navigate
        return (<GankNavi
            style={{
                flex: 1
            }}/>);
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});

// const Drawer = DrawerNavigator({
//     Gank: {
//         screen: Gank
//     },
//     Aipai: {
//         screen: Aipai
//     },
//     Douban: {
//         screen: Douban
//     },
//     Zhihu: {
//         screen: Zhihu
//     }
// }, {
//     drawerWidth: 220, // 抽屉宽
//     drawerPosition: 'left', // 抽屉在左边还是右边
//     // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
//     contentOptions: {
//         initialRouteName: Gank, // 默认页面组件
//         activeTintColor: '#008AC9', // 选中文字颜色
//         activeBackgroundColor: '#f5f5f5', // 选中背景颜色
//         inactiveTintColor: '#000', // 未选中文字颜色
//         inactiveBackgroundColor: '#fff', // 未选中背景颜色
//         style: { // 样式

//         }
//     }
// });

export default Gank;