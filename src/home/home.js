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
    View,
    TouchableNativeFeedback
} from 'react-native';
import { Actions } from "react-native-router-flux";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            timeLines: [
                { time: '6 AM', type: 'burn', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
                { time: '7 AM', type: 'fit', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
                { time: '6 PM', type: 'burn', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
                { time: '7 PM', type: 'fit', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] }
            ]
        }
    }
    renderList() {
        return this.state.timeLines.map((timeLine) => {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 2 }}>{timeLine.time}</Text>
                    <Text style={{ flex: 2 }}>{timeLine.type}</Text>
                    <TouchableNativeFeedback onPress={() => {
                        alert('you  reserve ' + timeLine.time + " " + timeLine.type)
                    }}>
                        <Text style={{ flex: 1 }}>reserve</Text>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => {
                        Actions.details({ timeLine });
                    }}>
                        <Text style={{ flex: 1 }}>details</Text>
                    </TouchableNativeFeedback>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding:10
    }
});
