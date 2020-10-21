import React, {Component} from 'react';
import {View} from "react-native";
import Profile from "../components/Profile";
import Levels from "../components/Levels"
import {Layout} from "@ui-kitten/components";

export default  class HomeScreen extends Component {
    render() {
        return (
            <Layout>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Profile/>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Levels/>
                </View>
            </Layout>
        );
    }
}
