import {StackNavigator} from 'react-navigation';
import HJWebView from './HJWebView'
import Drawer from '../screen/Drawer'
import ZhihuDetail from '../screen/zhihu/ZhihuDetail'
const Navi = StackNavigator({
    Drawer: {
        screen: Drawer
    },
    WebView: {
        screen: HJWebView
    },
    ZhihuDetail: {
        screen: ZhihuDetail
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
