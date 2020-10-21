import React, {Component} from 'react';
import {View} from "react-native";
import Profile from "../components/Profile";
import {Layout} from "@ui-kitten/components";
import data from "../data/level.json";
import CardLevel from "../components/CardLevel";

function Home({navigation}) {
    const handlePress = (id) => navigation.navigate('Level', {id});

    return (
        <Layout>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Profile/>
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                {data.map((v) => (<CardLevel key={v.id} level={v} handlePress={handlePress}/>))}
            </View>
        </Layout>
    );
}

export default Home;