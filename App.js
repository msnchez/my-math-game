import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/Home";
import LevelDetail from "./screens/LevelDetail";
import MissionDetail from "./screens/MissionDetail";
import FeedbackDetail from "./screens/FeedbackDetail";
import {setInitialData} from "./data/storage";

function App() {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function setData() {
      setUserId(await setInitialData())
    }

    setData();
  }, []); //TODO: improve deps and effect lifecycle.
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
          <Stack.Screen name="Feedback" component={FeedbackDetail}/>
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;

