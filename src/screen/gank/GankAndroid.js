//import liraries
import React, {Component} from "react";
import {StackNavigator, NavigationActions} from 'react-navigation';
import HJWebView from '../HJWebView'
import {
    ActivityIndicator,
    Animated,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "http://gank.io/api/data/Android/20/page";
const {width, height} = Dimensions.get("window")
class GankAndroid extends Component {
    static navigationOptions = {
        title: 'GankAndroid'
    }

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

        let tempUrl = url.replace('page', this.state.page);
        this.state.isLoading = true;
        console.log(tempUrl);
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            let data = responseData.results;
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
        this.state.page = this.state.page + 1;
        this.getData();
    };

    onRefresh = () => {
        console.log("onRefresh");
        this.state.page = 1;
        this.state.dataArray = [];
        this.getData();
    }
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
    }

    renderSeparator = () => {
        return (<View
            style={{
            height: 1,
            width: width,
            backgroundColor: "#CED0CE"
        }}/>);
    };

    renderItem({item}) {
        return (
            <TouchableOpacity onPress={() => this._navigate(item.value.url)}>
                <View
                    style={{
                    backgroundColor: 'white',
                    width: width,
                    justifyContent: 'center',
                    marginLeft: 10,
                    flexDirection: 'column'
                }}>

                    <Text
                        style={{
                        fontSize: 16,
                        color: 'green',
                        justifyContent: 'center',
                        height: 40
                    }}>{item.value.desc}</Text>

                </View>
            </TouchableOpacity>
        );
    }

    _navigate = (uri) => {
        // this
        //     .props
        //     .navigation
        //     .navigate('WebView', {url: uri});
        //  this.props.navigation.goBack();
        const navigateAction = NavigationActions.navigate({

            routeName: 'WebView',

            params: {url: uri},

            action: NavigationActions.navigate({routeName: 'WebView'})
        })

        this
            .props
            .navigation
            .dispatch(navigateAction);
    }
    renderData() {
        console.log(this.state.dataArray);
        return (<AnimatedFlatList
            data={this.state.dataArray}
            renderItem={this
            .renderItem
            .bind(this)}
            onEndReached={this.onEndReached}
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
            keyExtractor={item => item.value.url}
            ItemSeparatorComponent={this.renderSeparator}
            onEndReachedThreshold={0.1}
            style={{
            backgroundColor: 'white'
        }}/>);
    }
    //加载等待的view
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
export default GankAndroid;

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
