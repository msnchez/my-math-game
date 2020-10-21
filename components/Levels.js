import React from 'react';
import {View} from "react-native";
import data from "../data/level.json";
import CardLevel from "./CardLevel";

function Levels() {
    return (
        <View>
            {data.map((v) => (<CardLevel key={v.id} description={v.description} available={v.available}/>))}
        </View>
    );
}

export default Levels;