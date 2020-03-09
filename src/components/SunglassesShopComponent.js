import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';



export default class SunglassesShopComponent extends Component {
    arrSunGlasses = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../assets/images/glassesImage/v1.png'), desc: 'Mẫu kính v1: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: require('../assets/images/glassesImage/v2.png'), desc: 'Mẫu kính v2: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 3, price: 60, name: 'DIOR D6700HQ', url: require('../assets/images/glassesImage/v3.png'), desc: 'Mẫu kính v3: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 4, price: 20, name: 'DIOR D6005U', url: require('../assets/images/glassesImage/v4.png'), desc: 'Mẫu kính v4: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 5, price: 90, name: 'PRADA P8750', url: require('../assets/images/glassesImage/v5.png'), desc: 'Mẫu kính v5: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 6, price: 100, name: 'PRADA P9700', url: require('../assets/images/glassesImage/v6.png'), desc: 'Mẫu kính v6: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 7, price: 80, name: 'FENDI F8750', url: require('../assets/images/glassesImage/v7.png'), desc: 'Mẫu kính v7: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 8, price: 105, name: 'FENDI F8500', url: require('../assets/images/glassesImage/v8.png'), desc: 'Mẫu kính v8: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 9, price: 20, name: 'FENDI F4300', url: require('../assets/images/glassesImage/v9.png'), desc: 'Mẫu kính v9: Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
    ];

    state = {
        sunglass: this.arrSunGlasses[0].url,
        name: this.arrSunGlasses[0].name,
        price: this.arrSunGlasses[0].price,
        desc: this.arrSunGlasses[0].desc

    }

    handleClick = (item) => {
        let newItem = {
            sunglass: item.url,
            name: item.name,
            price: item.price,
            desc: item.desc
        }
        this.setState(newItem)
    }

    renderListProduct = () => {
        return (
            this.arrSunGlasses.map((item, index) => {
                return (
                    //     <Col>
                    //     <TouchableOpacity key={index}>
                    //     <Image style={{marginLeft:5, width:50, height:50}} source={item.url}/>
                    // </TouchableOpacity>
                    //     </Col>
                    <View key={index} style={{ marginLeft: 20 }}>
                        {/* <Text style={{ width: 50 }}>index</Text> */}
                        <TouchableOpacity  onPress={() => this.handleClick(item)}>
                            <Image style={{ marginLeft: 5, marginRight: 5, marginTop: 10, width: 100, height: 35 }} source={item.url} />
                        </TouchableOpacity>
                    </View>

                )
            })
        )
    }
    render() {
        return (
            <Grid>
                <Row size={4} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid>
                        <ImageBackground resizeMode='stretch' style={{position:'absolute',top:0,bottom:0,left:0,right:0}} source={require('../assets/images/glassesImage/model.jpg')}/>
                        <Row size={3} style={{alignItems:'center', justifyContent:'center'}}>
                            <Image style={{width:'55%',height:'35%',marginTop:20}} opacity={0.9} source={this.state.sunglass} />
                        </Row>
                        <Row size={2}>
                            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', width: '100%'}}>
                                <Grid>
                                    <Row style={{paddingLeft:20}}><Text style={{ color: '#03ff78', fontSize: 30, fontWeight: 'bold', opacity: 1 }}>{this.state.name}</Text></Row>
                                    <Row style={{paddingLeft:10}}><Text style={{ color: '#fff203', fontSize: 30, fontWeight: 'bold' }}>${this.state.price}</Text></Row>
                                    <Row size={2} style={{paddingLeft:10}}><Text style={{ color: '#ffffff', fontSize: 20 }}>{this.state.desc}</Text></Row>
                                </Grid>
                            </View>
                        </Row>
                    </Grid>
                </Row>
                <Row style={{justifyContent:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#fcc835', width:150, height:50, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, color:'#ffffff'}}>Choose glasses</Text>
                    </View>
                </Row>
                <Row size={2}>
                    <Grid style={{}}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {this.renderListProduct()}
                        </View>
                    </Grid>
                </Row>
            </Grid>

        )
    }
}

var styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        marginTop: 5,
        flex: 1,
        alignItems: 'center',
    },
    overlay: {
        opacity: 0.9,
        // backgroundColor: '#000000'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 300,
        height: 100
    },
    backdrop: {
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        height: '20%'

    },
    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
});