import React from 'react';
import {
    Button,
    Image,
    View,
    Text
} from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = {
        title:'聊天',
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <Text style={{padding:20}}>Chat with {params.user}</Text>

        </View>

        );
    }
}
export default ChatScreen;