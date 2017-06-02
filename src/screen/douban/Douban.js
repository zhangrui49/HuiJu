import React from 'react';
import Hot from './Hot'
import Coming from './Coming'
import Top from './Top'
import {TabNavigator} from "react-navigation";
const Douban = TabNavigator({
    Top: {
        screen: Top,
        navigationOptions: {
            tabBarLabel: 'TOP250'
        }
    },
    Hot: {
        screen: Hot,
        navigationOptions: {
            tabBarLabel: '最近热播'
        }
    },
    Coming: {
        screen: Coming,
        navigationOptions: {
            tabBarLabel: '即将上映'
        }
    }
}, {
    lazy: true,
    initialRouteName: 'Hot',
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


export default Douban;
