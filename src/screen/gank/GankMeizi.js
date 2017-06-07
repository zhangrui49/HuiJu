import React, {Component} from "react";
import {
    Animated,
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
    Alert
} from "react-native";
import CachedImage from "react-native-img-cache";
import RNFetchBlob from "react-native-fetch-blob";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "http://gank.io/api/data/福利/10/page";
const {width, height} = Dimensions.get("window")
class Meizi extends Component {
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
            dataArray: [],
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
                this.setState((state) => ({
                    dataArray: dataBlob,
                }));
            } else {
                this.setState((state) => ({
                    dataArray: [...this.state.dataArray, ...dataBlob],
                }));
            }

            this.setState((state) => ({
                isLoading: false
            }));
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

    renderItem({item}) {
        return (
            <TouchableHighlight onPress={() => this.saveImg(item)} onMoveShouldSetResponder={true}>
                <Image
                    source={{
                        uri: item.value.url
                    }}
                    style={{
                        height: 300,
                        width: width
                    }}/>
            </TouchableHighlight>);
    }

    saveImg(item) {
        Alert.alert("保存图片", "确定保存该图片?", [
                {text: '确定', onPress: () => this.download(item)},
                {text: '取消', onPress: () => this.dismiss(), style: 'cancel'},
            ],
            {cancelable: false});
    };

    dismiss() {
        console.log("dismiss")
    }

    download(item) {
        let dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob
            .config({
                path: dirs.DCIMDir + '/huiju/' + this.getFileName(item.value.url),
                fileCache: true,
            })
            .fetch('GET', item.value.url, {})
            .then((res) => {
                console.log('The file saved to ', res.path())
            })
    }

    getFileName(o) {
        let pos = o.lastIndexOf("/");
        return o.substring(pos + 1);
    }

    renderData() {
        console.log(this.state.dataArray);
        return (<AnimatedFlatList
            data={this.state.dataArray}
            renderItem={this.renderItem.bind(this)}
            onEndReached={this.onEndReached}
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
            keyExtractor={item => item.value.url}
            onEndReachedThreshold={0.1}/>);
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
export default Meizi;
