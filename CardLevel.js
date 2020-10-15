import React, {Component} from 'react';
import {Button, Text} from "react-native";
import {Card} from "@ui-kitten/components";

class CardLevel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card status={this.props.available ? 'primary' : 'danger'}>
                <Text>{this.props.description}</Text>
                <Button title="Click me!"/>
            </Card>
        );
    }
}

export default CardLevel;