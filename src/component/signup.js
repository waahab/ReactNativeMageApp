import React, { Component } from 'react';
import { Button, Content, Label, Item, Input, Container, Header, Body, Title, Right, Picker, Item as FormItem } from 'native-base';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
const Items = Picker.Item
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
export default class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            educationalRole: '',
            userName: '',
            email: '',
            password: '',


        }
    }


    render() {
        return (
            <Container >
                <Header style={{ backgroundColor: '#03A9F4', height: 70 }}>
                    <Body style={{ flex: 1, flexDirection: 'row' }}>
                        <Body style={{ flex: 1 }}>
                            <Title style={{ padding: 0, fontSize: 18, fontFamily: 'Raleway' }}>
                                CREATE AN ACCOUNT
                        </Title>
                        </Body >
                        <TouchableOpacity style={{ flex: 0.5 }}>
                            <Title style={{ padding: 0, fontSize: 18, fontFamily: 'Raleway', color: '#FFEB3B' }}>
                                SIGN IN
                        </Title>
                        </TouchableOpacity>

                    </Body>
                </Header>
                <ScrollView><Body style={{ flex: 1, flexDirection: 'column' }}>
                    <Body style={{ alignItems: 'center', padding: 30, flex: 1 }}>
                        <Image source={require('../Assets/mage_logo_Signin.png')} />
                        <View style={{ height: '0.8%', marginTop: '6%', alignItems: 'center' }}>
                            <Progress.Bar unfilledColor={'#cccccc'} progress={1} width={70} color='#cccccc' height={5} animated={true} borderWidth={0} />
                        </View>

                    </Body>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View style={{ marginHorizontal: '14%' }}>
                            <Label>You're using mage as</Label>
                        </View>
                        <View style={{ alignItems: 'center', marginVertical: '1%' }}>
                            <Item rounded style={styles.items}>
                                <Picker mode="dropdown" style={{ width: "90%" }} >
                                    <Items style={{ fontWeight: 5, fontSize: 12, }} label="Select one" value="default" />
                                    <Items style={{ fontSize: 12 }} label="Social" value="social" />
                                    <Items style={{ fontSize: 12 }} label="Student" value="student" />
                                    <Items style={{ fontSize: 12 }} label="Teacher" value="teacher" />
                                    <Items style={{ fontSize: 12 }} label="Work" value="work" />
                                </Picker>
                            </Item>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <Item rounded style={styles.items}>
                                <Input
                                    placeholder='University/School'
                                    placeholderStyle={{ fontSize: 10 }}
                                    placeholderTextColor="#b3b3b3"
                                    style={{ marginLeft: "10%", fontSize: 15 }}
                                // onChangeText={userName => this.setState({ userName })}
                                />
                                <Image
                                    style={{ width: 25, height: 20, marginRight: 20 }}
                                    source={require('../Assets/formIcons/Degree_iconios.png')} />
                            </Item>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <Item rounded style={styles.items}>
                                <Input
                                    placeholder='Username'
                                    placeholderStyle={{ fontSize: 10 }}
                                    placeholderTextColor="#b3b3b3"
                                    style={{ marginLeft: "10%", fontSize: 15 }}
                                // onChangeText={userName => this.setState({ userName })}

                                />
                                <Image
                                    style={{ width: "5%", height: '45%', marginRight: 20 }}
                                    source={require('../Assets/formIcons/user-icon1.png')} />
                            </Item>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <Item rounded style={styles.items}>
                                <Input
                                    placeholder='Type your  Email'
                                    placeholderStyle={{ fontSize: 10 }}
                                    placeholderTextColor="#b3b3b3"
                                    style={{ marginLeft: "10%", fontSize: 15 }}
                                    keyboardType={'email-address'}
                                    type='email'
                                // onChangeText={userName => this.setState({ userName })}
                                />
                                <Image
                                style={{width:'7%' , height:'37%', marginRight:20}}
                                source={require('../Assets/formIcons/emailblueios.png')} />
                            </Item>
                            <Item rounded style={styles.items}>
                                <Input
                                    placeholder='Confirm Email'
                                    placeholderStyle={{ fontSize: 10 }}
                                    placeholderTextColor="#b3b3b3"
                                    style={{ marginLeft: "10%", fontSize: 15 }}
                                    keyboardType={'email-address'}
                                    type='email'
                                // onChangeText={userName => this.setState({ userName })}
                                />
                                <Image
                                style={{width:'7%' , height:'37%', marginRight:20}}
                                source={require('../Assets/formIcons/emailblueios.png')} />

                            </Item>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <Item rounded style={styles.items}>
                                <Input
                                    placeholder='Enter Password'
                                    placeholderStyle={{ fontSize: 10 }}
                                    placeholderTextColor="#b3b3b3"
                                    style={{ marginLeft: "10%", fontSize: 15 }}
                                    secureTextEntry
                                // onChangeText={userName => this.setState({ userName })}
                                />
                                <Image
                                style={{width:19 , height:30, marginRight:20}}
                                source={require('../Assets/formIcons/lock_blueios.png')} />

                            </Item>
                        </View>

                        <Button block rounded style={{ height: 50, marginVertical: 15 }} >
                            <Text style={{ fontSize: 15, color: '#fff' }}>
                                JOIN MAGE
                        </Text>
                        </Button>





                    </View >
                </Body>
                </ScrollView>
            </Container>

        );
    }
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#ffffff',
        margin: 10,

        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ffffff',
        shadowColor: '#e6ebf3',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 2,
        width: '80%',
        margin: 10,
        elevation: 10,
    },
    items: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        shadowColor: '#e6ebf3',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 2.0,
        width: '80%',
        margin: 10,
        elevation: 10,

    },


})

