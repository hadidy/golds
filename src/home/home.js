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
import Timeline from 'react-native-timeline-listview';
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
        this.data = [
            {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688', icon: require('../../assets/images/logo.png')},
            {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: require('../../assets/images/logo.png')},
            {time: '12:00', title: 'Lunch', icon: require('../../assets/images/logo.png')},
            {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688', icon: require('../../assets/images/logo.png')},
            {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: require('../../assets/images/logo.png')}
          ]
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
//     render() {
//         return (
//             <View style={styles.container}>
//                 {this.renderList()}
//             </View>
//         );
//     }
// }
render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52}}
          timeStyle={{textAlign: 'center', backgroundColor:'#dce604', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:0}
          }}
          innerCircle={'icon'}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         padding:10
//     }
// });
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingRight: 20,
      paddingLeft: 20,
      backgroundColor:'white'
    },
    list: {
      flex: 1,
      marginTop:10,
    },
  });