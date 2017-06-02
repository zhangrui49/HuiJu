import {StackNavigator} from 'react-navigation';
import HJWebView from './HJWebView'
import GankNavi from '../screen/gank/GankNavi'
import ZhihuDetail from '../screen/zhihu/ZhihuDetail'
const Navi = StackNavigator({
    Gank: {
        screen: GankNavi
    },
    WebView: {
        screen: HJWebView
    },
    ZhihuDetail: {
        screen: ZhihuDetail
    },
},{
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
