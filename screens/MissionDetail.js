import React, {useState} from 'react';
import {Button, View} from "react-native";
import {Text, Card} from "@ui-kitten/components";

function MissionDetail({route, navigation}) {
    const {info} = route.params;
    const [value, setValue] = useState('');

    return (

        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
                <Button onPress={() => navigation.goBack()} title="Go back"/>
            </View>
            <View style={{flex: 5}}>
                <Card>
                    <Text>
                        Ayudemos al Señor cangrejo a construir su castillo de arena.
                    </Text>
                </Card>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
                <Button title="Iniciar" onPress={() => navigation.navigate('Problem', {info})}/>
            </View>
        </View>
);
}

export default MissionDetail;