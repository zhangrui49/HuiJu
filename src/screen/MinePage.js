import React,{Component} from 'react';
import {
    Button,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
   DrawerNavigator
} from 'react-navigation';

import MyNotificationsScreen from './Notification';

class MinePage extends Component{
    static navigationOptions = {
          title:'我的',
         drawerLabel: '我的',
        // Note: By default the icon is only shown on iOS. Search the  showIcon option below.
         drawerIcon: ({ tintColor }) => (
         <Image
              source={require('../image/loading.png')}
            style={[styles.icon, {tintColor: tintColor}]}
         />
      ),
   };
    render(){;
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <Text style={{padding:20}}>Sybil</Text>
                <Button
                  style={{padding:20}}
                  onPress={() => this.props.navigation.navigate('DrawerOpen')}
                  title="点击打开侧滑菜单"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});


const MyChatNavigator = DrawerNavigator({
    MyChat: {
        screen: MinePage,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
},{
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: MinePage, // 默认页面组件
        activeTintColor: '#008AC9',  // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

export default MyChatNavigator;