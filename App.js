import React from 'react';
import {View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import Levels from './level';
import Profile from './Profile'

const HomeScreen = () => (
    <Layout>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Profile/>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Levels/>
        </View>

    </Layout>
);

function App() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>

                <View>
                    <HomeScreen/>
                </View>

            </ApplicationProvider>
        </>
    );
}

export default App;

