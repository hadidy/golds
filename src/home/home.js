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
    TouchableNativeFeedback,
    Button,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { Actions } from "react-native-router-flux";
import Timeline from 'react-native-timeline-listview';
import { styles } from './home-style';
export default class Home extends Component {
    constructor() {
        super();
        // this.renderDetail = this.renderDetail.bind(this)
        // this.state = {
        //     timeLines: [
        //         { time: '6 AM', type: 'burn', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
        //         { time: '7 AM', type: 'fit', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
        //         { time: '6 PM', type: 'burn', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] },
        //         { time: '7 PM', type: 'fit', couch: "tantawy", program: ['v aps', 'push ups', 'russian twist', 'dead lift'] }
        //     ]
        // }
    }
render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}><Text style={styles.logo}>MY GYM</Text></View>
        <View style={styles.iconsContainer}>
        <TouchableWithoutFeedback style={styles.iconStyle} >
          <Image source={require('../../assets/images/calendar.png')}></Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.iconStyle}>
          <Image source={require('../../assets/images/user.png')}></Image>
        </TouchableWithoutFeedback>

        </View>
      </View>
    );
  }
 }
