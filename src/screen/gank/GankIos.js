/**
 * Created by zhangrui on 2017/6/1.
 */
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
const url = "http://gank.io/api/data/iOS/20/page";
const {width, height} = Dimensions.get("window")
class GankIos extends Component {
    static navigationOptions = {
        drawerLabel: '干货',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../image/gank.png')} style={{width: 20, height: 20}}/>
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
            style={styles.separator}/>);
    };

    renderItem({item}) {
        return (
            <TouchableOpacity onPress={() => this._navigate(item.value.url)}>
                <Text
                    style={styles.content}>{item.value.desc}</Text>
            </TouchableOpacity>
        );
    }

    _navigate = (uri) => {

        const navigateAction = NavigationActions.navigate({

            routeName: 'WebView',

            params: {url: uri},

            action: NavigationActions.navigate({routeName: 'WebView'})
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
export default GankIos;


const styles = StyleSheet.create({

    separator: {
        height: 1,
        width: width,
        backgroundColor: "#CED0CE"
    },
    content: {
        fontSize: 16,
        color: '#aa2200',
        height: 40,
        marginLeft: 10,
        textAlign: 'center'
    }

});
