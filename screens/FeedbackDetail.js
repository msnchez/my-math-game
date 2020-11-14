import React, {useEffect} from 'react';
import {Button, Text, View} from "react-native";
import {MISSIONS_PLAYED, PouchDB} from "../data/db";

const db = new PouchDB(MISSIONS_PLAYED);

function FeedbackDetail({route, navigation}) {
    const {info, value} = route.params;
    const doc = {
        _id: Date.now().toString(),
        wasSuccessful: info.solution === value,
        missionId: info.id,
        value
    };
    db.put(doc);

    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
                <Text>The solution is: {info.solution}, you put: {value}</Text>
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
                <Button title="Volver a intentar"/>
                <Button title="Continuar"/>

            </View>
        </View>
    )
        ;
}

export default FeedbackDetail;