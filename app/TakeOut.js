'use strict';
import React , {Component , PropTypes} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    ScrollView,
    AlertIOS,
    RefreshControl,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import px2dp from '../util'
import data from '../data'
class Item extends Component{
    constructor(props){
        super(props)
    }
    static propTypes ={
        title:PropTypes.string.isRefreshing,
        logo:PropTypes.number,
        state:PropTypes.string,
        time:PropTypes.string,
        info:PropTypes.string,
        price:PropTypes.string
    };
    render(){
        const {title,logo,state,time,info,price} = this.props;
        let render = (
            <View>
                <Image source={logo} style={styles.logo}/>
            </View>
        )
    }
}