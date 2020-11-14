import React from 'react';
import { Card, Text, Icon, TopNavigationAction } from '@ui-kitten/components';
import {Button, View} from "react-native";

function Intro() {
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back'/>
    );
    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 0.5}}>
                <Button onPress={() => navigation.goBack()} title="Go back"/>
            </View>
            <View style={{flex: 5}}>
                <Card>
                    <Text>
                        Ayudemos al Señor cangrejo a construir su castillo de arena.
                    </Text>
                </Card>
            </View>
            <View style={{flex: 0.5}}>
                <Button title="Go back"/>
            </View>
        </View>
    );
}

export default Intro;