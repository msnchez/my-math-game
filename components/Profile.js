import React from 'react';
import {Avatar, Layout, Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import user from '../data/user.json';

function Profile(id) {
    const info = user.find((id) => id == id);

    return (
        <Layout style={styles.container} level='1'>
            <Avatar style={styles.avatar} size='tiny' shape='square' source={require('../assets/profile/star.svg')}/>
            <Text style={styles.text} category='label'>{info.stars}</Text>
            <Avatar style={styles.avatar} size='tiny' shape='square' source={require('../assets/profile/coin.svg')}/>
            <Text style={styles.text} category='label'>{info.coins}</Text>
            <Avatar size='medium' source={require('../assets/profile/'+info.avatar)}/>
        </Layout>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 8,
    },
    avatar: {
        margin: 8,
    },
    text: {
        margin: 4
    }
});
/*
rsf*/
