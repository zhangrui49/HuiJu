import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';

class HJWebView extends Component {
    static navigationOptions = {
        title: 'HJWebView'
    }
    state = {
        backButtonEnabled: false,
        onShouldStartLoadWithRequest: false,
        loading: true,
        scalesPageToFit: true
    };

    render() {
        console.log(this.props.navigation.state.params.url);
        return (<WebView
                automaticallyAdjustContentInsets={false}
                source={{
                    uri: this.props.navigation.state.params.url
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
        return <Image source={require('../image/error.png')}/>
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});

//make this component available to the app
export default HJWebView;
