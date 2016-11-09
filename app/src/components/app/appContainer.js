//'use strict';

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
    ActivityIndicatorIOS,
    TabBarIOS,
    NavigatorIOS,
    TextInput,
    AsyncStorage
} from 'react-native';

import Home from '../home/home';
import Map from '../map/map';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Home'
        };

        App = {
            search: {
                refresh: false
            }
        };
    }

    render() {
        return (
            <TabBarIOS style={styles.AppContainer}>

                <TabBarIOS.Item
                    title="Home"
                    systemIcon="favorites"
                    selected={this.state.selectedTab == 'Home'}
                    onPress={()=> this.setState({selectedTab: 'Home'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        initialRoute={{
                            component: Home,
                            title: 'PERLYNA RESORT',
                            passProps: {}
                        }}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Map"
                    //systemIcon="search"
                    icon={require('../home/img/map.png')}
                    selected={this.state.selectedTab == 'Map'}
                    onPress={()=> this.setState({selectedTab: 'Map'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="emp"
                        initialRoute={{
                            component: Map,
                            title: 'Map',
                            rightButtonTitle: 'Clear',
                            onRightButtonPress: () => {
                                App.search.refresh = true;
                                this.refs.emp.navigator.push({
                                    title: "Map",
                                    component: Map,
                                    rightButtonTitle: 'Back',
                                    onRightButtonPress: () => {
                                        App.search.refresh = true;
                                        this.refs.emp.navigator.popToTop()
                                    }
                                })
                            }
                        }}
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

/*
 systemIcon List:
 bookmarks
 contacts
 downloads
 favorites
 featured
 history
 more
 "most-recent"
 "most-viewed"
 recents
 search
 "top-rated"
 */

const styles = StyleSheet.create({
    AppContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    container: {
        //backgroundColor: '#F5FCFF',
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 66,
        height: 65
    },
    heading: {
        fontSize: 30,
        margin: 10,
        marginBottom: 20
    },
    loginInput: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: '#48BBEC'
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
    error: {
        color: 'red',
        paddingTop: 10
    }
});

export default AppContainer;
