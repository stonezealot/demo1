import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeView from './HomeView'
import MeView from './MeView'

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    constructor(props){
        super();
        this.state={
            selectedTab:'home',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image style={styles.myImage} source={require('../Img/home.png')} />}
                        renderSelectedIcon={() => <Image style={styles.myImage} source={require('../Img/home.png')} />}
                        badgeText=""
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View style={{flex:1}}>
                            <HomeView />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'me'}
                        title="我"
                        renderIcon={() => <Image style={styles.myImage} source={require('../Img/me.png')} />}
                        renderSelectedIcon={() => <Image style={styles.myImage} source={require('../Img/me.png')} />}
                        badgeText=""
                        onPress={() => this.setState({ selectedTab: 'me' })}>
                        <View style={{flex: 1}}>
                            <MeView />
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
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
    }
})