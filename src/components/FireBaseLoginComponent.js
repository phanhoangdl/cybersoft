import React from 'react'
import { View, Text, Image } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
//import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin'

const FireBaseLoginComponent = () => {
    return (
        <Grid style={{backgroundColor:'#FFFFFF'}}>
            <Row style={{ backgroundColor: '#68B3FF', alignItems:'center' }}>
                <Text style={{fontSize:18,color:'#FFFFFF', marginLeft:10}}>My Firebase App</Text>
            </Row>
            <Row style={{ flex: 3, backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center' }}>
                
                <Image source={require('../assets/images/login/cloud.jpg')} style={{width:'30%', height:'40%'}} />
            </Row>
            <Row style={{backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center', marginTop:5}}>
            <View style={{backgroundColor:'#F0F0F0', width:'70%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                <Text style={{color:'#000000'}}>Sign in with google</Text>
            </View>
            {/* <Image source={require('../assets/images/login/google.png')} style={{width:'80%', height:'60%'}} /> */}
            </Row>
            <Row style={{backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center', marginTop:5}}>
            {/* <Image source={require('../assets/images/login/facebook.jpg')} style={{width:'80%', height:'60%'}} /> */}
            <View style={{backgroundColor:'#5D80EC', width:'70%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                <Text style={{color:'#FFFFFF'}}>Sign in with Facebook</Text>
            </View>
            </Row>
            <Row style={{backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center', marginTop:5}}>
            {/* <Image source={require('../assets/images/login/twitter.png')} style={{width:'75%', height:'60%'}} /> */}
            <View style={{backgroundColor:'#57BAFF', width:'70%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                <Text style={{color:'#FFFFFF'}}>Sign in with Twitter</Text>
            </View>
            </Row>
            
            <Row style={{backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center', marginTop:5}}>
            {/* <Image source={require('../assets/images/login/email.png')} style={{width:'91%', height:'80%'}} /> */}
            <View style={{backgroundColor:'#BB2E18', width:'70%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                <Text style={{color:'#FFFFFF'}}>Sign in with email</Text>
            </View>
            </Row>
            <Row style={{justifyContent:'center', alignItems:'center'}}>
                <View style={{backgroundColor:'#44C6B9', width:'70%', height:'70%', justifyContent:'center', alignItems:'center', borderRadius:5}}>
                    <Text style={{color:'#FFFFFF'}}>Sign in with phone</Text>
                </View>
            </Row>
        </Grid>
    )
}

export default FireBaseLoginComponent
