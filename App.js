import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/Home";
import LevelDetail from "./screens/LevelDetail";
import MissionDetail from "./screens/MissionDetail";
import Problem from "./screens/activity/Problem";
import Resolution from "./screens/activity/Resolution";
import FeedbackDetail from "./screens/FeedbackDetail";
import {setInitialData} from "./data/storage";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

function App() {
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        async function setData() {
            setUserId(await setInitialData())
        }

        setData();
    }); //TODO: improve deps and effect lifecycle.
    const Stack = createStackNavigator();

    return (
        <NavigationContainer theme={MyTheme}>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Level" component={LevelDetail}/>
                    <Stack.Screen name="Mission" component={MissionDetail}/>
                    <Stack.Screen name="Problem" component={Problem}/>
                    <Stack.Screen name="Resolution" component={Resolution}/>
                    <Stack.Screen name="Feedback" component={FeedbackDetail}/>
                </Stack.Navigator>
            </ApplicationProvider>
        </NavigationContainer>
    );
}

export default App;

