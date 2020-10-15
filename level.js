import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {Card} from '@ui-kitten/components';
import data from './data/level.json';

const list = data.map((key) => {
    return (
        <Card>
            <Text>{key.description}</Text>
            <Button title="Click me!"/>
        </Card>
    )
});

export default class Levels extends Component {
    render() {
        return (
            <View>  {list}  </View>
        )
    }
}