import {StackNavigator} from 'react-navigation';
import HJWebView from './HJWebView'
import GankNavi from '../screen/gank/GankNavi'
const Navi = StackNavigator({
    Gank: {
        screen: GankNavi
    },
    WebView: {
        screen: HJWebView
    },
},{
    headerMode:'none'
});
export default Navi;
