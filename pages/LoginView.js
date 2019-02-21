import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, View, Button, Image} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
type Props={};
export default class LoginView extends Component<props> {
    // static navigationOptions = {
    //     title: 'HomeScreen'
    // }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Img/ow.png')} style={styles.iconStyle}/>
                <TextInput placeholder={'请输入用户名'} style={styles.inputStyle}/>
                <TextInput placeholder={'请输入密码'} style={styles.inputStyle} secureTextEntry={true} />
                <View style={styles.loginButtonStyle}>
                    <Button title="登陆" onPress={() => this.props.navigation.navigate('Home')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
    iconStyle: {
        marginTop:100,
        marginBottom:40,
        width: 80,
        height: 80,
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
    },
    inputStyle: {
        width: 350,
        height: 50,
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 1,
        borderWidth: 2,
        borderRadius: 20,
        textAlign: 'center'
    },
    loginButtonStyle: {
        marginTop: 30,
        marginBottom: 30,
        width: 300,
        height: 40,
        borderRadius: 15,
    }
});