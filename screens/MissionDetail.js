import React from 'react';
import {View, Text, Button} from "react-native";
import CardMission from "../components/CardMission";

function MissionDetail({route, navigation}) {
    const {info} = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <Text>{info.title}</Text>
            <Text>{info.information}</Text>
            <Button onPress={() => navigation.goBack()} title="Go back"/>
            <Button title="Validar" onPress={() => navigation.navigate('Feedback')}/>
        </View>
    );
}

export default MissionDetail;