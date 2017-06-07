/**
 * Created by zhangrui on 2017/6/2.
 */

import React, {Component} from "react";
import {Animated, FlatList, Image, Text, View} from "react-native";
import {NavigationActions} from "react-navigation";
import MeiPaiItem from "./MeiPaiItem";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "http://newapi.meipai.com/output/channels_topics_timeline.json?id=1&&";

class MeiPaiHot extends Component {
    static navigationOptions = {
        drawerLabel: '美拍',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../image/meipai.png')} style={{width: 20, height: 20}}/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            page: 1,
            errorInfo: "",
            dataArray: []
        }
    }

    getData() {
        let tempUrl = url + "page=" + this.state.page + "&&count=10";
        this.state.isLoading = true;
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            let data = responseData;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({key: i, value: item})
                i++;
            });
            if (this.state.page === 1) {
                this.setState((state) => ({dataArray: dataBlob}));
            } else {
                this.setState((state) => ({
                    dataArray: [
                        ...this.state.dataArray,
                        ...dataBlob
                    ]
                }));
            }
            this.setState((state) => ({isLoading: false}));
            data = null;
            dataBlob = null;
        }).catch((error) => {
            console.log(error);
            this.state.isLoading = false;
            this.setState({error: true, errorInfo: error})
        }).done();
    }

    onEndReached = () => {
        console.log("onEndReached");
        this.state.page = this.state.page + 10;
        this.getData();
    };

    onRefresh = () => {
        console.log("onRefresh");
        this.state.page = 1;
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
                height: 3,
                backgroundColor: "#aaeedd"
            }}/>);
    };



    renderItem({item}) {
        return (

            <MeiPaiItem  item={item} onPress={()=>this._navigate(item)}/>
        );
    }

    _navigate = (item) => {

        const navigateAction = NavigationActions.navigate({

            routeName: 'WebView',

            params: {
                url: item.value.url
            },

            action: NavigationActions.navigate()
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
            renderItem={this.renderItem.bind(this)}
            onEndReached={this.onEndReached}
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
            keyExtractor={item => item.value.id}
            ItemSeparatorComponent={this.renderSeparator}
            onEndReachedThreshold={0.2}
            style={{
                backgroundColor: 'white'
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

export default MeiPaiHot;
