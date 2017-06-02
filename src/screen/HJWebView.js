import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';

class HJWebView extends Component {
    static navigationOptions = {
        title: 'HJWebView'
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
