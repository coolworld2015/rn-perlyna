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
    Switch,
    MapView,
    WebView
} from 'react-native';

import SearchResults from './searchResults';
import SearchIMDB from './searchIMDB';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            eventSwitchBase: true,
            eventSwitchTitle: true,
            textSwitchBase: 'Search in iTunes',
            textSwitchTitle: 'Search by title',
            markers: [
            {
                latitude: 45.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            }]
        }
    }

    clearSearch() {
        this.setState({
            searchQuery: '',
            invalidValue: false
        })
    }

    onSearchPressed() {
        if (this.state.searchQuery == undefined) {
            this.setState({
                invalidValue: true
            });
            return;
        }

        if (this.state.eventSwitchBase) {
            this.props.navigator.push({
                title: this.state.searchQuery,
                component: SearchResults,
                passProps: {
                    searchQuery: this.state.searchQuery
                }
            })
        } else {
            this.props.navigator.push({
                title: this.state.searchQuery,
                component: SearchIMDB,
                passProps: {
                    searchQuery: this.state.searchQuery
                }
            })
        }

    }

    toggleTypeChange() {
        if (!this.state.eventSwitchBase) {
            this.setState({
                textSwitchBase: 'Search in iTunes'
            });
        } else {
            this.setState({
                textSwitchBase: 'Search in IMDB'
            });
        }
    }

    render() {
        var errorCtrl = <View />;

        if (this.state.serverError) {
            errorCtrl = <Text style={styles.error}>
                Something went wrong.
            </Text>;
        }

        var validCtrl = <View />;

        if (this.state.invalidValue) {
            validCtrl = <Text style={styles.error}>
                Value required - please provide.
            </Text>;
        }

        var html = '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8" />' +
            '<meta name="viewport" content="initial-scale=1.0, user-scalable=no">' +
             '<title>Google Maps Multiple Markers</title>' +
              '  <script src="http://maps.google.com/maps/api/js?sensor=false"' +
               '         type="text/javascript"></script>' +
        '</head>' +
        '<body style="background-color: black; color: white">' +
        '<div>' +
            '<center>' +
             '   <h5>PERLYNA RESORT</h5>' +
            '</h5>' +
            '<img src="./logo.png" style="width: 100%; height: 100px;">' +
                '<hr><button onClick="getPos()" style="width: 300px; height: 55px; font-size: 20px; font-weight: bold">Get current position</button>' +
        '</div>' +
        '<hr>' +
            '<div id="map" style="width: 100%; height: 350px; float: left; margin-right: 25px; color: black">' +
            '</div>' +
        '<script type="text/javascript">' +
            'var map = new google.maps.Map(document.getElementById("map"), {' +
            'zoom: 15,' +
            'center: new google.maps.LatLng(49.5443047,31.8691583),' +
            //mapTypeId: google.maps.MapTypeId.ROADMAP
            'mapTypeId: google.maps.MapTypeId.SATELLITE' +
        '});' +
    '<script';

        return (
            <WebView
                source={{uri: 'https://www.google.com.ua/maps/place/%D0%9F%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D0%B0+%D0%A0%D0%B5%D0%B7%D0%BE%D1%80%D1%82/@49.5443458,31.8516129,14z/data=!4m5!3m4!1s0x0:0xef0027af01f2c984!8m2!3d49.5443458!4d31.8691224?hl=ru'}}
                //source={{html:'<div>Cool<div>'}}
                //source={{html:html}}
            />

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginTop: 0
    },
    loginInput1: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: 'gray'
    },
    loginInput: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        //color: 'gray',
        alignSelf: 'stretch'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    loader: {
        marginTop: 20
    },
    welcome: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default Search;
