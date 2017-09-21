'use strict';
import React,{Component} from 'react';
import {
    View,
    Platform
} from 'react-native';
import Navigation from './app'
export default class HelloMe extends Component{
    render(){
        return(
            <View style={{backgroundColor:Platform.OS = "ios"?"#fff":"#0398ff",flex:1}}>
                <Navigation />
            </View>
        )
    }
}