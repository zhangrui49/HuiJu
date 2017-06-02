import React, {Component} from "react";
import {NavigationActions} from 'react-navigation';
import {
    Animated,
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "http://news-at.zhihu.com/api/4/news/before/";
const {width, height} = Dimensions.get("window")
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
class Zhihu extends Component {

    static navigationOptions = {
        drawerLabel: '知乎',
        title: '知乎日报',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../image/zhihu.png')} style={{width: 20, height: 20}}/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            errorInfo: "",
            dataArray: []
        }
    }

    getData() {
        let date = new Date();
        let tempUrl = url + date.Format('yyyyMMdd');
        console.log(tempUrl);
        this.state.isLoading = true;
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            let data = responseData.stories;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({key: i, value: item})
                i++;
            });
            this.setState((state) => ({dataArray: dataBlob}));
            this.setState((state) => ({isLoading: false}));
            data = null;
            dataBlob = null;
        }).catch((error) => {
            console.log(error);
            this.state.isLoading = false;
            this.setState({error: true, errorInfo: error})
        }).done();
    }

    getDateFormat() {


    }

    onRefresh = () => {
        console.log("onRefresh");
        this.state.dataArray = [];
        this.getData();
    };

    componentDidMount() {
        this.getData();
    }

    renderErrorView(error) {
        return (
            <View>
                <Text>
                    Error: {error}
                </Text>
            </View>
        );
    };

    renderSeparator = () => {
        return (<View
            style={{
                height: 2,
                width: width,
                backgroundColor: "#CED0CE"
            }}/>);
    };

    renderItem({item}) {
        return (
            <TouchableOpacity onPress={() => this._navigate(item.value.id)}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 20}}>
                    <Image source={{uri: item.value.images[0]}} style={{height: width * 0.2, width: width * 0.2}}/>
                    <View style={{
                        flex: 1,
                        marginLeft: 10,
                        height: 60,
                        width: width * 0.7,
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text
                            numberOfLines={2}
                            style={{
                                fontSize: 16,
                                color: 'green',
                                height: 60,
                                width: width * 0.7,
                                justifyContent: 'center',
                            }}>{item.value.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _navigate = (id) => {

        const navigateAction = NavigationActions.navigate({

            routeName: 'ZhihuDetail',

            params: {id: id},

            action: NavigationActions.navigate({routeName: 'ZhihuDetail'})
        });

        this
            .props
            .navigation
            .dispatch(navigateAction);
    };

    renderData() {
        console.log(this.state.dataArray);
        return (<AnimatedFlatList
            data={this.state.dataArray}
            renderItem={this
                .renderItem
                .bind(this)}
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
            keyExtractor={item => item.value.id}
            ItemSeparatorComponent={this.renderSeparator}
            onEndReachedThreshold={0.1}
            style={{
                backgroundColor: 'white',
                marginTop: 5
            }}/>);
    }

    renderLoadingView() {
        this.state.isLoading = true;
        this.renderData();
    }

    render() {
        if (this.state.isLoading && !this.state.error) {
            return this.renderData();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据
        return this.renderData();
    }

}
export default Zhihu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 15,
        color: 'blue'
    },
    content: {
        fontSize: 15,
        color: 'black'
    }

});
