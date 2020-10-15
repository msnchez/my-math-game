import React, {Component} from 'react';
import {StyleSheet, Text} from "react-native";
import {Card, Icon} from "@ui-kitten/components";

class CardLevel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={this.props.available ? styles.card : [styles.card, styles.disabledCard]}>

                {this.props.available ? (
                    <Text>{this.props.description}</Text>
                ) : (
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='lock-outline'
                    />
                )
                }

            </Card>
        );
    }
}

export default CardLevel;

const styles = StyleSheet.create({
    card: {
        margin: 8,
        alignItems: 'center'
    },
    disabledCard: {
        backgroundColor: 'whitesmoke'
    },
    icon: {
        width: 32,
        height: 32,
        color: 'blue'
    }
});