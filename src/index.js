import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { StackNavigator } from 'react-navigation'
import * as Progress from 'react-native-progress';
import * as firebase from 'firebase';
import Screen from './component/screen1'
import Signin from './component/signin'
import Signup from './component/signup'

    class Router extends Component{

        componentWillMount(){
            var config = {
                apiKey: "AIzaSyAjavxoNljMqCtfKihmNxFSbeqbmNlCbrA",
                authDomain: "nativesignin-waahab.firebaseapp.com",
                databaseURL: "https://nativesignin-waahab.firebaseio.com",
                projectId: "nativesignin-waahab",
                storageBucket: "nativesignin-waahab.appspot.com",
                messagingSenderId: "707379463004"
              };
              if (!firebase.apps.length) {
                firebase.initializeApp(config);
              }
        }

    }



export default StackNavigator({
    Screen1: {
        screen: Screen
    },
    signin: {
        screen: Signin
    },
    signup: {
        screen:Signup
    }
},
    {
        navigationOptions: {
            header: null
        },

        initialRouteName: 'signin'
    }
)

