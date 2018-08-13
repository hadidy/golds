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

export default class Detail extends Component {
    rederProgamDetails() {
        return this.props.timeLine.program.map((item) => {
            return (
                <View style={{ flexDirection: 'column' , justifyContent: 'space-evenly' , flex:4 }} >
                    <Text>{item}</Text>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1, fontWeight: 'Bold' }}>{this.props.timeLine.couch}</Text>
                    <Text style={{ flex: 1, fontWeight: 'normal' }}>{this.props.timeLine.time}{this.props.timeLine.type}</Text>
                    {this.rederProgamDetails()}
                </View>
                <View style={{ flex: 1 }}>

                </View>

            </View>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    }
});
