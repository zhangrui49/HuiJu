import {StackNavigator} from 'react-navigation';
import HJWebView from './HJWebView'
import Drawer from '../screen/Drawer'
import ZhihuDetail from '../screen/zhihu/ZhihuDetail'
import MovieDetail from '../screen/douban/MovieDetail'
const Navi = StackNavigator({
    Drawer: {
        screen: Drawer,
        navigationOptions: {
            headerTintColor: '#F44336',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    },
    WebView: {
        screen: HJWebView,
        navigationOptions: {
            headerTintColor: '#F44336',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    },
    ZhihuDetail: {
        screen: ZhihuDetail,
        navigationOptions: {
            headerTintColor: '#F44336',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    },
    MovieDetail: {
        screen: MovieDetail,
        navigationOptions: {
            headerTintColor: '#F44336',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        },
    },
}, {
    navigationOptions: {
        headerBackTitle: "",
        headerTintColor: '#333333',
        showIcon: true,
        swipeEnabled: true,
        animationEnabled: true,
    },
    mode: 'card',
});
export default Navi;
