import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';

export default class Screen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            progressfill: 0
        }
    }
    
    render() {
        setTimeout((function () {
            this.setState({
                progressfill: this.state.progressfill + 0.5
            });
            if(this.state.progressfill===1){

                this.props.navigation.navigate('signin')
            }
        }).bind(this), 500)
        return (
            <View style={styles.container}>
              
                <View style={styles.logo}>
                    <Image source={require('../Assets/mage_logo_Signin.png')} />
                </View>
                <Progress.Bar style={styles.progress} progress={this.state.progressfill} width={200} />

                <View style={styles.mainImage}>
                    <Image source={require('../Assets/Illustration_splash.png')} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            alignItems: 'center',

        },
    logo: {
        flex: 1,

        padding: 60
    },
    mainImage: {
        // flex:1,
        alignItems: 'flex-end'
    },
    progress: {
        marginBottom: 60
    }


})

