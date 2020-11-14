import React from 'react';
import {Button, View} from "react-native";
import {Card, Text} from "@ui-kitten/components";

function Problem({route, navigation}) {
    const {info} = route.params;

    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
                <Button onPress={() => navigation.goBack()} title="Go back"/>
            </View>
            <View style={{flex: 5}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Card>
                        <Text>
                            Reunamos 10 baldes de arena. Si ya tenemos 5 baldes cuantos nos faltan?
                        </Text>
                    </Card>
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text >Construye la operación</Text>
                    </View>
                    <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Canvas</Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
                <Button title="Resolver" onPress={() => navigation.navigate('Resolution', {info})}/>
            </View>
        </View>
    );
}

export default Problem;