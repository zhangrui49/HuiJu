/**
 * Created by zhangrui on 2017/6/6.
 */
import MeipaiPage from './MeipaiPage'
import React, {Component} from "react";
class MeipaiPet extends Component {
    static navigationOptions = {
        title: '美拍', //设置标题内容
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MeipaiPage type="6" navigation={this.props.navigation}/>
        );
    }
}
export default MeipaiPet;