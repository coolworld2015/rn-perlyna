'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView,
    ScrollView,
    ActivityIndicator,
    TabBarIOS,
    NavigatorIOS,
    TextInput,
    AsyncStorage,
    Alert
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        };

    }

    renderRow(rowData) {
        var image = <View />;
        if (rowData) {
            if (rowData.artworkUrl100) {
                image = <Image
                    source={{uri: rowData.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg')}}
                    style={{
                        height: 95,
                        width: 75,
                        borderRadius: 20,
                        margin: 20
                    }}
                />;
            } else {
                image = <Image
                    source={{uri: rowData.pic}}
                    style={{
                        height: 95,
                        width: 75,
                        borderRadius: 20,
                        margin: 20
                    }}
                />;
            }
        }
        return (
            <TouchableHighlight
                onPress={()=> this.pressRow(rowData)}
                underlayColor='#ddd'
            >
                <View style={styles.imgsList}>

                    {image}

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <Text>{rowData.trackName}</Text>
                        <Text>{rowData.releaseDate.split('-')[0]}</Text>
                        <Text>{rowData.country}</Text>
                        <Text>{rowData.primaryGenreName}</Text>
                        <Text>{rowData.artistName}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {


        if (this.state.showProgress) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator
                        size="large"
                        animating={true}/>
                </View>
            );
        }
        return (
            <ScrollView style={{backgroundColor: 'black'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    {/*<Text style={{color: 'white'}}>PERLYNA RESORT</Text>*/}

                    <Image
                        source={require('../../../logo.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={{
                        color: 'white',
                        margin: 15,
                        fontSize: 18,
                        textAlign: 'justify'
                    }}>
                        Новый культурно - оздоровительный комплекс с гостиницей и ресторанами в пос. Сокирна, Черкасский
                        район. Мы находимся на правом берегу Днепра, в самом центре Украины, между гг. Киев и Черкассы.
                        Резорт расположен в зеленой, экологически чистой зоне около мошногорского горного массива.

                    </Text>

                    <Image
                        source={require('../../../resort1.jpg')}
                        resizeMode='stretch'
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 5,
                        }}
                    />

                    <Text style={{
                        color: 'white',
                        margin: 15,
                        fontSize: 18,
                        textAlign: 'justify'
                    }}>
                        Новый культурно - оздоровительный комплекс с гостиницей и ресторанами в пос. Сокирна, Черкасский
                        район. Мы находимся на правом берегу Днепра, в самом центре Украины, между гг. Киев и Черкассы.
                        Резорт расположен в зеленой, экологически чистой зоне около мошногорского горного массива.

                    </Text>

                    <Image
                        source={require('../../../resort2.jpg')}
                        resizeMode='stretch'
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 5,
                        }}
                    />

                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    imgsList: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    countHeader: {
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#F5FCFF',
    },
    countFooter: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        borderColor: '#D7D7D7',
        backgroundColor: 'whitesmoke'
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 20,
        margin: 0
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default Home;
