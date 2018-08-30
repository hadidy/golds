
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { styles } from './login-style';
export default class Login extends Component {
    constructor() {
        super();
        this.state = { username: '' };
        this.state = { password: '' };
    }
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/shutterstock.jpg')}>
                <View style={styles.loginContainer}>
                    <ScrollView>
                        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                        <View style={styles.textInputsContainer}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholderTextColor="#fff" 
                                style={styles.textInputStyle}
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                                placeholder='Username'
                            />
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholderTextColor="#fff" 
                                style={styles.textInputStyle}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                placeholder='Password'
                            />
                        </View>
                        <TouchableOpacity onPress={console.log('button clicked')} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

