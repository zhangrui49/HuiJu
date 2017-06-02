import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';
let url='http://news-at.zhihu.com/api/4/news/id'
class ZhihuDetail extends Component {
    static navigationOptions = {
        title: '知乎日报'
    }
    state = {
        backButtonEnabled: false,
        onShouldStartLoadWithRequest: false,
        loading: true,
        scalesPageToFit: true,
        body:''
    };
    componentDidMount() {
        this.getStory();
    }
    getStory(){
        let tempUrl = url.replace('id', this.props.navigation.state.params.id);
        console.log(tempUrl);
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
           this.state.body = responseData.body;
        }).catch((error) => {
            console.log(error);
        }).done();
    }

    render() {
        return (<WebView
                automaticallyAdjustContentInsets={false}
                source={{
                    html: this.state.body,
                    baseUrl:'http://daily.zhihu.com/'
                }}
                javaScriptEnabled={true}
                decelerationRate="normal"
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
                renderError={this.renderError}
            />
        );
    }

    renderError() {
        return <Image source={require('../../image/error.png')}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});


export default ZhihuDetail;
