import React, {useEffect} from 'react';
import {Text, View} from "react-native";
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>The solution is: {info.solution}, you put: {value}</Text>
    </View>
  );
}

export default FeedbackDetail;