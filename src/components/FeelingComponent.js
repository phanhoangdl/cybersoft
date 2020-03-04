import React, { Component, Children } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

export default class FeelingComponent extends Component {
    state = {
        feeling: require('../assets/images/emoji/e1.png')
    }

    handleE1Click = () => {
        this.setState({ feeling: require('../assets/images/emoji/e1.png') })
    }
    handleE2Click = () => {
        this.setState({ feeling: require('../assets/images/emoji/e2.png') })
    }
    handleE3Click = () => {
        this.setState({ feeling: require('../assets/images/emoji/e3.png') })
    }
    handleE4Click = () => {
        this.setState({ feeling: require('../assets/images/emoji/e4.png') })
    }
    handleE5Click = () => {
        this.setState({ feeling: require('../assets/images/emoji/e5.png') })
    }

    handleClick = (source) => {
        
        let newFeeling = {feeling:source};
        console.log(this.state)
        this.setState(newFeeling)
    }
    render() {
        return (
            <Grid>
                <Row style={{ flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 25 }}>Bạn đang cảm thấy thế nào?</Text></Row>
                <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Image source={this.state.feeling} />
                </Row>
                <Row style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.handleClick(10)} ><Image source={require('../assets/images/emoji/e1.png')} style={{ width: 50, height: 50 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.handleE2Click}><Image source={require('../assets/images/emoji/e2.png')} style={{ width: 50, height: 50 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.handleE3Click}><Image source={require('../assets/images/emoji/e3.png')} style={{ width: 50, height: 50 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.handleE4Click}><Image source={require('../assets/images/emoji/e4.png')} style={{ width: 50, height: 50 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.handleE5Click}><Image source={require('../assets/images/emoji/e5.png')} style={{ width: 50, height: 50 }} /></TouchableOpacity>
                </Row>
            </Grid>
        );
    }
}
