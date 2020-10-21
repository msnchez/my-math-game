import React from 'react';
import {StyleSheet, Text} from "react-native";
import {Card} from "@ui-kitten/components";

function CardMission({info}) {
    return (
        <Card style={styles.card}>
            <Text>{info.description}</Text>
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