import React, { Component, Children } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

export default class FeelingComponent extends Component {
    arrEmoji = [
        { id: 1, url: require('../assets/images/emoji/e1.png') },
        { id: 2, url: require('../assets/images/emoji/e2.png') },
        { id: 3, url: require('../assets/images/emoji/e3.png') },
        { id: 4, url: require('../assets/images/emoji/e4.png') },
        { id: 5, url: require('../assets/images/emoji/e5.png') },
    ];

    state = {
        feeling: this.arrEmoji[0].url
    }

    handleClick = (source) => {
        console.log(source)
        let newFeeling = {feeling:source};
        this.setState(newFeeling)
    }
    renderEMoji = () => {
        return this.arrEmoji.map((emoji, index) => {
            return(
                <TouchableOpacity key={index} onPress={() => this.handleClick(emoji.url)} ><Image source={emoji.url} style={{ width: 50, height: 50 }} /></TouchableOpacity>
            )
        })
    }
    render() {
        return (
            <Grid>
                <Row style={{ flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 25 }}>Bạn đang cảm thấy thế nào?</Text></Row>
                <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Image source={this.state.feeling} />
                </Row>
                <Row style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                    {this.renderEMoji()}
                </Row>
            </Grid>
        );
    }
}
