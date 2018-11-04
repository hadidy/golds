/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import {styles} from './detail-style'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.data=[{title:'Fit',image:require('../../assets/images/fit.jpg'),coachName:'ali',time:'5:30'},{title:'Fit',image:require('../../assets/images/fit1.jpg'),coachName:'ahmed',time:'7:30'}]
    }
    rederProgamDetails() {
        return this.data.map((item,index) => {
            return (
                <View key={index} style={styles.cardStyle}>
                    <Image style={styles.imageStyle} source={item.image}></Image>
                    <View style={styles.details}>

                    <Text style={styles.detailsTitle}>{item.title}</Text>
                    <Text>{item.coachName}</Text>
                    <Text>{item.time}</Text>
                    <TouchableWithoutFeedback onPress={()=>console.log('Reserve')}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>Reserve</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    </View>
                </View>
            )
        })
    }
    render() {
        return (
            <ScrollView style={styles.containers}>
                    {this.rederProgamDetails()}
            </ScrollView>

        )

    }
}

