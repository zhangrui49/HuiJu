/**
 * Created by zhangrui on 2017/6/2.
 */

import React, {Component} from 'react';
import StarRating from 'react-native-star-rating';
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
import {NavigationActions} from 'react-navigation';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const url = "https://api.douban.com/v2/movie/coming_soon";
const {width, height} = Dimensions.get("window")
class Coming extends Component {
    static navigationOptions = {
        drawerLabel: '豆瓣',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../image/video.png')} style={{width: 20, height: 20}}/>
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
        let tempUrl = url + "?start=" + this.state.page + "&&count=10";
        this.state.isLoading = true;
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            let data = responseData.subjects;
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
                height: 1,
                width: width,
                backgroundColor: "#CED0CE"
            }}/>);
    };

    renderItem({item}) {
        let country = this.generateString(item.value.countries);
        let genres = this.generateString(item.value.genres);
        return (
            <TouchableOpacity onPress={() => this._navigate(item)}>
                <View style={styles.item_container}>
                    <Image
                        source={{uri: item.value.images['large']}}
                        style={{
                            width: width * 0.5,
                            height: height * 0.3
                        }}/>
                    <View style={styles.item_desc}>
                        <Text style={styles.title}>{item.value.title}</Text>
                        <Text style={styles.text}>{item.value.countries ? country : item.value.countries}</Text>
                        <Text style={styles.text}>{genres}</Text>
                        <Text style={styles.text}>{item.value.year}</Text>
                        <Text style={styles.text}>{item.value.directors[0]['name']}</Text>
                        <StarRating
                            maxStars={10}
                            rating={item.value.rating['average']
                            }
                            starColor={'red'}
                            disabled={true}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            starSize={20}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    generateString(array) {
        let s = "";
        if (array) {
            for (let i = 0; i < array.length; i++) {
                if (i !== array.length - 1) {
                    s += array[i] + "/";
                } else {
                    s += array[i];
                }
            }
        }
        return s;
    }

    _navigate = (item) => {

        const navigateAction = NavigationActions.navigate({

            routeName: 'MovieDetail',

            params: {
                id: item.value.id,
                title: item.value.title
            },

            action: NavigationActions.navigate({routeName: 'MovieDetail'})
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

// define your styles
const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    item_desc: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        marginLeft: 20
    },
    title: {
        color: '#aa2200',
        fontSize: 18,
    },
    text: {
        color: '#aa2200',
        fontSize: 14,
        height:30
    }

});

export default Coming;
