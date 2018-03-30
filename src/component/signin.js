import React, { Component } from 'react';
import { Button, Content, Item, Input, Container, Header, Body, Title, Right } from 'native-base';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import ProgressBar from 'react-native-progress/Bar';
import { authWithGoogle } from "../Action/AuthAction";
import * as Progress from 'react-native-progress';
import firebase from 'firebase';

export default class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
            // play services are available. can now configure library
        })
            .catch((err) => {
                console.log("Play services error", err.code, err.message);
            })
    }

    _signInWithGoogle() {
        let that = this;
        GoogleSignin.configure({
            iosClientId:  "707379463004-cdmc9tjiup0hghri37mcqeqqn50255sg.apps.googleusercontent.com",
        })
            .then(() => {
                let thatIs = that;
                GoogleSignin.signIn()
                    .then((accessTokenData) => {
                        firebase.auth.GoogleAuthProvider.credential(accessTokenData);
                        thatIs.props.authWithGoogle(credential);
                    })
                    .catch((err) => {
                        alert('Wrong Signin')
                    })
                    .done();

            });
    }


    render() {
        return (
            <Container >
                <Header style={{ backgroundColor: '#03A9F4', height: 70 }}>
                    <Body style={{ flex: 1, flexDirection: 'row' }}>
                        <Body style={{ flex: 1 }}>
                            <Title style={{ padding: 0, fontSize: 18, fontFamily: 'Raleway' }}>
                                SIGN IN
                        </Title>
                        </Body >
                        <TouchableOpacity style={{ flex: 2 }}>
                            <Title style={{ padding: 0, fontSize: 18, fontFamily: 'Raleway', color: '#FFEB3B' }}>
                                CREATE AN ACCOUNT
                        </Title>
                        </TouchableOpacity>
                    </Body>
                </Header>
                <ScrollView>
                    <Body style={{ flex: 1, flexDirection: 'column' }}>
                        <Body style={{ alignItems: 'center', padding: 30, flex: 1 }}>
                            <Image source={require('../Assets/mage_logo_Signin.png')} />
                            <Progress.Bar style={
                                {
                                    alignItems: 'center',
                                    margin: '5%',
                                }
                            } progress={this.state.progressfill} width={100} />


                        </Body>
                        <Body style={{ alignItems: 'center', flex: 3, marginLeft: 30, marginRight: 30 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Raleway', paddingTop: 10 }}>
                                SIGN IN WITH YOUR MAGE ACCOUNT
                    </Text>
                            <Item rounded
                                style={styles.input}>
                                <Input
                                    placeholder='Enter Email'
                                    placeholderTextColor='#424242'
                                    keyboardType={'email-address'}
                                    type='email'
                                />
                            </Item>
                            <Item rounded style={styles.input}>
                                <Input placeholder='Enter Password'
                                    placeholderTextColor='#424242'
                                    secureTextEntry
                                />
                            </Item>
                            <Button block rounded style={{ height: 50, marginVertical: 8 }} >
                                <Text style={{ fontSize: 15, color: '#fff' }}>
                                    SIGN IN
                        </Text>
                            </Button>

                            <View style={{ marginVertical: 35, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#000' }}>
                                    OR SIGN IN WITH
                  </Text>
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <GoogleSigninButton
                                        style={{ width: 48, height: 48 }}
                                        size={GoogleSigninButton.Size.Icon}
                                        color={GoogleSigninButton.Color.Dark}
                                        onPress={this._signInWithGoogle.bind(this)}
                                    />
                                </View>
                            </View>
                        </Body>
                    </Body>
                </ScrollView>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authWithGoogle: (credential) => {
            dispatch(authWithGoogle(credential))
        }
    }
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#ffffff',
        margin: 10,
        paddingLeft: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ffffff',
        shadowColor: '#e6ebf3',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 2,
        width: '90%',
        margin: 10,
        elevation: 4,
    }

})

