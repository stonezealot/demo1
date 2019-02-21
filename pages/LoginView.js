import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './MainScreen';
type Props={};
export default class LoginView extends Component<props> {
    // static navigationOptions = {
    //     title: 'HomeScreen'
    // }
    constructor(props){
        super(props);
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            showValue:"",
        }
    }
    _onChangeText(inputData){
        console.log("输入的内容",inputData);
        //把获取到的内容，设置给showValue
        this.setState({showValue:inputData});
        this.setState({helloName:inputData});

    }
    showData(){
        alert(this.state.showValue);//展示输入框的内容
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Img/ow.png')} style={styles.iconStyle}/>
                <TextInput placeholder={'请输入用户名'} style={styles.inputStyle} onChangeText={this._onChangeText}/>
                <TextInput placeholder={'请输入密码'} style={styles.inputStyle} secureTextEntry={true} />
                <View style={styles.loginButtonStyle}>
                    <Button title="登陆" onPress={() => this.props.navigation.navigate('Home', { user: this.state.showValue})} />
                </View>
                <TouchableOpacity onPress={this.showData.bind(this)}>
                    <View style={styles.btn}>
                        <Text style={styles.wordC}>搜索</Text>
                    </View>
                </TouchableOpacity>
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
    },
    btn:{
        width:85,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
        // borderRadius:5
    },
    wordC:{
        color:"white",
        fontSize:18,
    }
});