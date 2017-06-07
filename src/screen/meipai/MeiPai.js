import React from "react";


import {TabNavigator} from "react-navigation";

import MeiPaiHot from "./MeiPaiHot";
import MeiPaiFunny from "./MeipaiFunny";
import MeiPaiStar from "./MeipaiStar";
import MeipaiGirl from "./MeipaiGirl";
import MeipaiPet from "./MeipaiPet";
import MeipaiMusic from "./MeipaiMusic";
const MeiPai = TabNavigator({
    MeiPaiHot: {
        screen: MeiPaiHot,
        navigationOptions: {
            tabBarLabel: '热门'
        }
    },
    MeiPaiFunny: {
        screen: MeiPaiFunny,
        navigationOptions: {
            tabBarLabel: '搞笑'
        }
    },
    MeiPaiStar: {
        screen: MeiPaiStar,
        navigationOptions: {
            tabBarLabel: '名人'
        }
    },
    MeipaiMusic: {
        screen: MeipaiMusic,
        navigationOptions: {
            tabBarLabel: '音乐'
        }
    },
    MeipaiPet: {
        screen: MeipaiPet,
        navigationOptions: {
            tabBarLabel: '萌宠'
        }
    },
    MeipaiGirl: {
        screen: MeipaiGirl,
        navigationOptions: {
            tabBarLabel: '女神'
        }
    }
}, {
    lazy: true,
    initialRouteName: 'MeiPaiHot',
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

export default MeiPai;
