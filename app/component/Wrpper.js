'use strict';
import React,{Component} from 'react';
import {
    Navigator,
    View
} from 'react-native'

import TabView from './TabView'

export default class Wrpper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <TabView />
            </View>
        )
    }
}