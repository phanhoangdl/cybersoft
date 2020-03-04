import React from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
const LoginUserComponent = () => {
    return (
        <Grid style={{borderRadius:20}}>
            <Row style={{ flex: 2, backgroundColor: 'pink' }}>
                <ImageBackground source={require('../assets/images/login/a_chau.jpg')} style={{ width: '100%', height: '100%' }} />
            </Row>
            <Row style={{ flex: 5, backgroundColor: 'brown', borderStyle: 'solid' }}>
                <Grid>
                    <Row style={{ backgroundColor: 'white' }}>
                        <Grid style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Row style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}><Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome Back</Text></Row>
                            <Row style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}><Text>Login to your account</Text></Row>
                        </Grid>
                    </Row>
                    <Row style={{ flex: 3, backgroundColor: 'white' }}>
                        <Grid style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TextInput style={{ fontSize: 18, width: '90%', height: '60%', borderRadius: 30, backgroundColor: '#F0F0F0', paddingLeft: 15, }} placeholder='Email' />
                            </Row>
                            <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
                                <TextInput style={{ fontSize: 18, width: '90%', height: '60%', borderRadius: 30, backgroundColor: '#F0F0F0', paddingLeft: 15, }} placeholder='Password' />
                            </Row>
                            <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableOpacity style={{ backgroundColor: '#F88C75', width: '90%', height: '60%', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 18 }}>Login</Text></TouchableOpacity>
                            </Row>
                        </Grid>
                    </Row>
                    <Row style={{ flex: 2, backgroundColor: 'white',  }}>
                        <Grid style={{justifyContent: 'center', alignItems:'center'}}>
                            <Row><Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>Forgot your password?</Text></Row>
                            <Row style={{alignItems:'center'}}><Text style={{fontWeight:'100'}}>Don't have an account?</Text><Text style={{color:'orange'}}> Sign Up</Text></Row>
                        </Grid>

                    </Row>
                </Grid>

            </Row>
        </Grid>
    )
}

export default LoginUserComponent
