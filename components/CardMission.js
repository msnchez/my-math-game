import React from 'react';
import {Button, StyleSheet, Text} from "react-native";
import {Card} from "@ui-kitten/components";

function CardMission({info, handlePress}) {
    return (
        <Card style={styles.card} >
            <Text>{info.short_name}</Text>
            <Button onPress={() => handlePress(info)} title="Jugar"/>
        </Card>
    );
}

export default CardMission;

const styles = StyleSheet.create({
    card: {
        margin: 8,
        alignItems: 'center'
    }
});