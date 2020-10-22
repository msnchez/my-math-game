import React from 'react';
import {View, Text, Button} from "react-native";
import data from "../data/level.json";
import CardMission from "../components/CardMission";

function LevelDetail({route, navigation}) {
    const {id} = route.params;
    const levelInfo = data.find((v) => v.id == id);
    const handlePress = (info) => navigation.navigate('Mission',{info});

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            {levelInfo.missions.map((v) => (<CardMission key={v.id} info={v} handlePress={handlePress}/>))}
            <Button onPress={() => navigation.goBack()} title="Go back"/>

        </View>
    );
}

export default LevelDetail;