import React from 'react';
import {StyleSheet, Text, Button} from "react-native";

import {Card, Icon} from "@ui-kitten/components";

function CardLevel({navigation, available, description, key}) {
    return (
        <Card style={available ? styles.card : [styles.card, styles.disabledCard]}>

            {available ? (
                <Text>{description}</Text>
            ) : (
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='lock-outline'
                />
            )
            }

            <Button title="Go to detail" onPress={() => navigation.navigate('Level')}/>

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