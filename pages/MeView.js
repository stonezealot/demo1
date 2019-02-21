import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View, Button, Image, TouchableOpacity, Dimensions} from 'react-native'
const width = Dimensions.get('window').width


export default class HomeView extends Component<props> {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Img/ow.png')} style={styles.iconStyle}/>
            </View>
        );
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