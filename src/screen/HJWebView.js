import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';

class HJWebView extends Component {
    static navigationOptions = {
        title: '汇聚'
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
        }
    }

    render() {
        console.log(this.props.navigation.state.params.url);
        return (<WebView
                automaticallyAdjustContentInsets={false}
                source={{
                    uri: this.props.navigation.state.params.url
                }}
                javaScriptEnabled={true}
                decelerationRate="normal"
                onShouldStartLoadWithRequest={true}
                startInLoadingState={true}
                scalesPageToFit={false}
                renderError={this.renderError}
            />
        );
    }

    renderError() {
        return <Image source={require('../image/error.png')}/>
    }
}

export default HJWebView;
