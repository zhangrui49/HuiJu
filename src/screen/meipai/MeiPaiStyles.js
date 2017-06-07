/**
 * Created by zhangrui on 2017/6/6.
 */
import {StyleSheet,Dimensions} from 'react-native';
const {width, height} = Dimensions.get("window")
export default StyleSheet.create({
    item_container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginLeft:10
    },
    item_desc: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginLeft: 10
    },
    img_avatar: {
        width: 40,
        height: 40,
        marginLeft: 15
    },
    screen_name: {
        color: '#aa2200',
        fontSize: 18,
        marginLeft:10,
        alignItems:'center',
        fontWeight: 'bold',
    },
    img_cover: {
        width:  width * 0.9,
        height: height * 0.3,
        alignSelf:'center'
    },
    view_title: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop:5
    },
    view_count: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignSelf:'center',
    },
    title: {
        color: '#aa2200',
        fontSize: 16,
        marginLeft:15,
        marginTop:5,
        maxHeight:40,
        lineHeight:20
    },
    text: {
        color: '#aa2200',
        fontSize: 14,
        height: 30,
        width:width * 0.3,
        alignSelf:'center'
    }

});