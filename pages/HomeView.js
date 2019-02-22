import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View, Button, Image, TouchableOpacity, Dimensions} from 'react-native'

const width = Dimensions.get('window').width

export default class HomeView extends Component<props> {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.recommendStyle}>电影推荐</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            >
                {this.renderChildView()}
            </ScrollView>
            </View>

        );
    }

    renderChildView(){
        var allChild = [];
        var colors = ['blue', 'yellow', 'red', 'pink', 'green'];
        for (var i=0; i<5; i++){
            allChild.push(
                <View key={i} style={{backgroundColor: colors[i],width:width, height: 120}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return allChild;
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    myImage:{
        width: 22,
        height: 22
    },
    recommendStyle:{
        height:40,
        textAlign: 'center',
        fontSize: 30,
    }
})