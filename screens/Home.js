import React, {Component} from 'react';
import {Button, View} from "react-native";
import Profile from "../components/Profile";
import data from "../data/level.json";
import CardLevel from "../components/CardLevel";

function Home({navigation}) {
    const handlePress = (id) => navigation.navigate('Level', {id});

    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 0.5,  alignItems: 'flex-end'}}>
                <Profile id={1}/>
            </View>
            <View style={{flex: 5.5, alignItems: 'center', justifyContent: 'center'}}>
                {data.map((v) => (<CardLevel key={v.id} level={v} handlePress={handlePress}/>))}
            </View>
        </View>
    );
}

export default Home;