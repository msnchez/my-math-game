import React from 'react';
import {View, Text, Button} from "react-native";
import data from "../data/level.json";
import CardMission from "../components/CardMission";
import Profile from "../components/Profile";
import CardLevel from "../components/CardLevel";

function LevelDetail({route, navigation}) {
    const {id} = route.params;
    const levelInfo = data.find((v) => v.id == id);
    const handlePress = (info) => navigation.navigate('Mission', {info});

    return (

        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <Button onPress={() => navigation.goBack()} title="Go back"/>
            </View>
            <View style={{flex: 5.5, alignItems: 'center', justifyContent: 'center'}}>
                {levelInfo.missions.map((v) => (<CardMission key={v.id} info={v} handlePress={handlePress}/>))}
            </View>
        </View>
    )
}

export default LevelDetail;