'use strict';
import React,{Component} from 'react';
import {
       Navigator,
       View,
       StatusBar,
       Platform
}from 'react-native';
import Wrpper from './component/Wrpper'
export default class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render (){
        return Platform.OS == "ios"?(
            <Navigator
                initialRoute={{component:Wrpper}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene ={(route,navigator) => {
                    return <route.component navogator = {navigator} {...route.args}/>
                }}
            />
        ):(
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#0398ff"
                    barStyle = "light-content"
                />
                <Navigator
                    initialRoute={{component:Wrpper}}
                    configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                    renderScene ={(route,navigator) => {
                        return <route.component navogator = {navigator} {...route.args}/>
                    }}
                />
            </View>
        )
    }
}