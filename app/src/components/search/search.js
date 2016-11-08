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

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: 'https://www.google.com.ua/maps/place/%D0%9F%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D0%B0+%D0%A0%D0%B5%D0%B7%D0%BE%D1%80%D1%82/@49.5443458,31.8516129,14z/data=!4m5!3m4!1s0x0:0xef0027af01f2c984!8m2!3d49.5443458!4d31.8691224?hl=ru'
        }

    }

    componentWillUpdate() {
        if (App.search.refresh) {
            App.search.refresh = false;
            this.setState({
                html: 'https://www.google.com.ua/maps/place/%D0%9F%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D0%B0+%D0%A0%D0%B5%D0%B7%D0%BE%D1%80%D1%82/@49.5443458,31.8516129,14z/data=!4m5!3m4!1s0x0:0xef0027af01f2c984!8m2!3d49.5443458!4d31.8691224?hl=ru'
            });
        }
    }

    render() {
        // var html = '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8" />' +
        //     '<meta name="viewport" content="initial-scale=1.0, user-scalable=no">' +
        //     '<title>Google Maps Multiple Markers</title>' +
        //     '  <script src="http://maps.google.com/maps/api/js?sensor=false"' +
        //     '         type="text/javascript"></script>' +
        //     '</head>' +
        //     '<body style="background-color: black; color: white">' +
        //     '<div>' +
        //     '<center>' +
        //     '   <h5>PERLYNA RESORT</h5>' +
        //     '</h5>' +
        //     '<img src="./logo.png" style="width: 100%; height: 100px;">' +
        //     '<hr><button onClick="getPos()" style="width: 300px; height: 55px; font-size: 20px; font-weight: bold">Get current position</button>' +
        //     '</div>' +
        //     '<hr>' +
        //     '<div id="map" style="width: 100%; height: 350px; float: left; margin-right: 25px; color: black">' +
        //     '</div>' +
        //     '<script type="text/javascript">' +
        //     'var map = new google.maps.Map(document.getElementById("map"), {' +
        //     'zoom: 15,' +
        //     'center: new google.maps.LatLng(49.5443047,31.8691583),' +
        //     //mapTypeId: google.maps.MapTypeId.ROADMAP
        //     'mapTypeId: google.maps.MapTypeId.SATELLITE' +
        //     '});' +
        //     '<script';

        return (
            <WebView
                source={{uri: this.state.html}}
                //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
                //renderLoading={this.onShouldStartLoadWithRequest.bind(this)}
                //source={{html:'<div>Cool<div>'}}
                //source={{html:html}}
            />
        )
    }
}

const styles = StyleSheet.create({});

export default Search;
