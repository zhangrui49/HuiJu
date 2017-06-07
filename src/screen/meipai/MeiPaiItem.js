/**
 * Created by zhangrui on 2017/6/6.
 */

import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

import Styles from "./MeiPaiStyles";
export default class MeiPaiItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={Styles.item_container}>
                    <Text style={Styles.title}>{item.value.caption}</Text>
                    <Image
                        source={{uri: item.value.cover_pic}}
                        style={Styles.img_cover}/>
                    <View style={Styles.view_title}>
                        <Image
                            source={{uri: item.value.avatar}}
                            style={Styles.img_avatar}/>
                        <Text style={Styles.screen_name}>{item.value.screen_name}</Text>
                    </View>
                    <View style={Styles.view_count}>
                        <Text style={Styles.text}>{item.value.plays_count}人观看</Text>
                        <Text style={Styles.text}>{item.value.likes_count}人喜欢</Text>
                        <Text style={Styles.text}>{item.value.comments_count}人评论</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}