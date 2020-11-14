import React, {useState} from 'react';
import {Button, View} from "react-native";
import {Card, Text, Input} from "@ui-kitten/components";

function Resolution({route, navigation}) {
    const {info} = route.params;
    const [value, setValue] = useState('');

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
                        <Text category='h1'>5 + ? = 10</Text>
                    </View>
                    <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Canvas</Text>
                        <Input
                            placeholder='Place your Text'
                            value={value}
                            onChangeText={nextValue => setValue(nextValue)}
                        />
                    </View>
                </View>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
                <Button title="Comprobar" onPress={() => navigation.navigate('Feedback', {info, value})}/>
            </View>
        </View>
    );
}

export default Resolution;