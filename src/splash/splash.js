/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Splash extends Component {

    render() {
        setTimeout(() => {
            Actions.home();
        }, 100)
        return (

            <View style={styles.container}>
                <Text>splaaaash</Text>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {

    }
});
