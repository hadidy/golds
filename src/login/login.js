
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Image
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
        <ImageBackground  style={styles.backgroundImage} source={require('../../assets/images/shutterstock.jpg')}>
            <View style={styles.loginContainer}>
                <Image  style={styles.logo} source={require('../../assets/images/logo.png')}/>
                <View style={styles.textInputsContainer}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ username })}
                        value={this.state.username}
                        placeholder='Username'
                    />
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ password })}
                        value={this.state.password}
                        placeholder='Password'
                    />

                </View>
                <TouchableOpacity onPress={alert('login')} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        );
    }
}

