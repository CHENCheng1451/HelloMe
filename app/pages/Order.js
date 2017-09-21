'use strict';
import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import NavBar from '../component/NavBar'

import TakeOut from './TakeOut'

export default class Order extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#f3f3f3"}}>
                <NavBar title="订单"/>
                <ScrollableTabView renderTabBar={()=> <TabViewBar/>}>
                    <TakeOut tabLable="外卖"/>
                    <Breakfast tabLable="早餐"/>
                </ScrollableTabView>
            </View>
        )
    }
}