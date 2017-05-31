import {StackNavigator} from 'react-navigation';
import HJWebView from './HJWebView'
import GankAndroid from './gank/GankAndroid'
import IOS from './gank/GankTab'
import Gank from './gank/Gank'
import GankNavi from '../screen/gank/GankNavi'
const Navi = StackNavigator({
    Gank: {
        screen: GankNavi
    },
    // Android: {
    //     screen: GankAndroid
    // },
    WebView: {
        screen: HJWebView
    },
    //   IOS: {
    //     screen: IOS
    // },
},{
    headerMode:'none'
});
export default Navi;
