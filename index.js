/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {View,ScrollView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var TimerMixin = require('react-timer-mixin');


AppRegistry.registerComponent(appName, () => App);
