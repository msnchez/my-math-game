import React from 'react';
import {StyleSheet, Text, Button} from "react-native";

import {Card, Icon} from "@ui-kitten/components";

function CardLevel({level, handlePress}) {
    return (
        <Card style={level.available ? styles.card : [styles.card, styles.disabledCard]}>
            <Text>{level.description}</Text>
            <Event id={level.id} status={level.available} handlePress={handlePress}/>
        </Card>
    );
}

function Event(props) {

    if (props.status) {
        return (
            <div>
                <Button title="Ver" onPress={() => props.handlePress(props.id)}/>
            </div>
        )
    } else {
        return <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='lock-outline'
        />

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