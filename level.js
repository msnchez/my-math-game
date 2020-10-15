import React, {Component} from "react";
import {View} from "react-native";
import CardLevel from "./CardLevel";
import data from './data/level.json';

export default class Levels extends Component {
    render() {
        return (
            <View>
                {data.map((v) => (<CardLevel key={v.id} description={v.description} available={v.available}/>))}
            </View>
        )
    }
}
