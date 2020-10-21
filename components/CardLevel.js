import React from 'react';
import {StyleSheet, Text, Button} from "react-native";

import {Card, Icon} from "@ui-kitten/components";

function CardLevel({level, handlePress}) {
    return (
        <Card style={level.available ? styles.card : [styles.card, styles.disabledCard]}>

            {level.available ? (
                <Text>{level.description}</Text>
            ) : (
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='lock-outline'
                />
            )
            }

            <Button title="Go to detail" onPress={() => handlePress(level.id)}/>

        </Card>
    );
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