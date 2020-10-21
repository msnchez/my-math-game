import React from 'react';
import {View, Text, Button} from "react-native";
import data from "../data/level.json";
import CardMission from "../components/CardMission";

function LevelDetail({route, navigation}) {
    const {id} = route.params;
    const levelInfo = data.find((v) => v.id == id);
    return (
        <View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                {levelInfo.missions.map((v) => (<CardMission key={v.id} info={v} />))}
            </View>
            <Button onPress={() => navigation.goBack()} title="Go back"/>
        </View>
    );
}

export default LevelDetail;