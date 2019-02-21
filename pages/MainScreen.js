import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

export default class MainScreen extends Component {

    constructor(props){
        super();
        this.state={
            selectedTab:'tb_msg',
        }
    }

    tabNavigatorItems(selectedTab,title,icon,selectedIcon,imageStyle,mark,viewContent){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab }
                title={title}
                renderIcon={()=> <Image style={styles.myImage} source={icon}/> }
                renderSelectedIcon={()=> <Image style={[styles.myImage,{tintColor:imageStyle}]} source={selectedIcon}/> }
                badgeText={mark}
                onPress={()=> this.setState({selectedTab:selectedTab}) }>
                <View style={{flex:1}}><Text>{viewContent}</Text></View>
            </TabNavigator.Item>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    {this.tabNavigatorItems('tb_msg',"首页",require('../Img/home.png'),require('../Img/ow.png'),'#ffe09a',"","消息页面内容")}
                    {this.tabNavigatorItems('tb_contacts',"我",require('../Img/me.png'),require('../Img/ow.png'),'#65bb74',"","联系人页面内容")}
                    {this.tabNavigatorItems('tb_watch',"看点",require('../Img/ow.png'),require('../Img/ow.png'),'#6ebef3',"","看点页面内容")}
                    {this.tabNavigatorItems('tb_dynamic',"动态",require('../Img/ow.png'),require('../Img/ow.png'),'#622193',"","动态页面内容")}
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