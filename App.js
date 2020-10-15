import React from 'react';
import Levels from './level';
import Information from "./user/info";

import * as eva from '@eva-design/eva';
import {ApplicationProvider, Card, Layout, Text} from '@ui-kitten/components';

const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>HOME</Text>
        <Levels/>
    </Layout>
);

function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <HomeScreen/>
        </ApplicationProvider>
    );
}

export default App;

