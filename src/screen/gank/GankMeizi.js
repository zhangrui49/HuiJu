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
const url = "http://gank.io/api/data/福利/10/1";
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
            errorInfo: "",
            dataArray: []
        }
    }
    getData() {
        fetch(url).then((response) => response.json()).then((responseData) => {
            let data = responseData.results;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({key: i, value: item})
                i++;
            });
            this.setState({
                //复制数据源
                dataArray: dataBlob,
                isLoading: false
            });
            data = null;
            dataBlob = null;
        }).catch((error) => {
            this.setState({error: true, errorInfo: error})
        }).done();
    }

    componentDidMount() {
        //请求数据
        this.getData();
    }

    //加载等待的view
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={[
                    styles.gray, {
                        height: 80
                    }
                ]}
                    color='red'
                    size="large"/>
            </View>
        );
    }

    //加载失败view
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
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
        return (<AnimatedFlatList data={this.state.dataArray} renderItem={this.renderItem}/>);
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
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