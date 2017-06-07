import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';
let url = 'http://news-at.zhihu.com/api/4/news/id'
class ZhihuDetail extends Component {
    static navigationOptions = {
        title: '知乎日报'
    }
    constructor(props) {
        super(props);
        this.state = {
            body:""
        }
    }

    componentDidMount() {
        this.getStory();
    }

    getStory() {
        let tempUrl = url.replace('id', this.props.navigation.state.params.id);
        console.log(tempUrl);
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            this.setState((state) => ({
                body:responseData.body
            }));
        }).catch((error) => {
            console.log(error);
        }).done();
    }

    render() {
        return (
            <View style={ {flex:1}}>
            <WebView
                automaticallyAdjustContentInsets={false}
                source={{
                    html: this.state.body,
                    baseUrl: 'http://daily.zhihu.com/'
                }}
                javaScriptEnabled={true}
                decelerationRate="normal"
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
                renderError={this.renderError}
            />
            </View>
        );
    }

    renderError() {
        return <Image source={require('../../image/error.png')}/>
    }
}

export default ZhihuDetail;
