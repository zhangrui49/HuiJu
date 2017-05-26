import React, {Component} from 'react';
import {Image} from 'react-native'
import Styles from "../styles/SplashStyles"

export default class Splash extends Component {
    static navigationOptions = {
        title: 'Splash'
    };
    constructor(props) {
        super(props);
        setTimeout(() => {
           this.props.navigation('Main')
        }, 2000);
    }

    render() {
        return (<Image source={require('../image/splash.jpg')} style={Styles.backimagestyle}/>)
    }
}
