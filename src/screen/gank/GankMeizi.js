//import liraries
'use strict';
import React, {Component} from "react";
import {
    ActivityIndicator,
    Animated,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from "react-native";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "http://gank.io/api/data/福利/10/page";
const {width, height} = Dimensions.get("window")
class Meizi extends Component {
    static navigationOptions = {
        title: 'Meizi'
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            page:1,
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
            if(this.state.page===1){
                     this.setState((state) => ({
                dataArray: dataBlob,
            }));
            }else{
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
        this.state.page=this.state.page+1;
        this.getData();
    };

    onRefresh = () => {
        console.log("onRefresh");
        this.state.page = 1;
        this.state.dataArray=[];
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
        return (<Image
            source={{
            uri: item.value.url
        }}
            style={{
            height: 300,
            width: width
        }}/>);

    }
    renderData() {
        console.log(this.state.dataArray);
        return (<AnimatedFlatList
            data={this.state.dataArray}
            renderItem={this.renderItem}
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