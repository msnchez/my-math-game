import React, {useState} from 'react';
import {Button, Text, TextInput, View} from "react-native";

function MissionDetail({route, navigation}) {
  const {info} = route.params;
  const [value, setValue] = useState('hello');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{info.title}</Text>
      <Text>{info.information}</Text>
      <TextInput onChangeText={(value) => setValue(value)} value={value}/>
      <Button onPress={() => navigation.goBack()} title="Go back"/>
      <Button title="Validar" onPress={() => navigation.navigate('Feedback', {info, value})}/>
    </View>
  );
}

export default MissionDetail;