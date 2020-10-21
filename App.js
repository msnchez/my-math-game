import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import LevelDetail from "./screens/LevelDetail";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Level" component={LevelDetail}/>
                </Stack.Navigator>
            </ApplicationProvider>
        </NavigationContainer>
    );
}

export default App;

