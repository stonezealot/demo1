import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View, Button, Image, TouchableOpacity, Dimensions, Alert} from 'react-native'
const width = Dimensions.get('window').width


export default class HomeView extends Component<props> {

    render() {
        return (
            <View style={styles.container} onPress={this.renderPress()}>
                <Image source={require('../Img/ow.png')} style={styles.iconStyle}/>
                <TouchableOpacity
                    activeOpacity = {0.5}>
                    <View>
                        <Text style={{fontSize: 40}}>
                            收藏
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity = {0.5}>
                    <View>
                        <Text style={{fontSize: 40}}>
                            关注
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity = {0.5}>
                    <View>
                        <Text style={{fontSize: 40}}>
                            个人信息
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


        );
    }

    renderPress(){
        Alert.alert('收藏')
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
})