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
                        style={styles.img1}
                    />

                    <Text style={styles.text}>
                        Новый культурно - оздоровительный комплекс с гостиницей и ресторанами в пос. Сокирна, Черкасский
                        район. Мы находимся на правом берегу Днепра, в самом центре Украины, между гг. Киев и Черкассы.
                        Резорт расположен в зеленой, экологически чистой зоне около мошногорского горного массива.
                    </Text>

                    <Image
                        source={require('../../../resort1.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        Для Вашего отдыха:
                        гостиница, открытый бассейн с видом на Днепр, 25 м, закрытый бассейн с зоной джакузи, 25 м,
                        рестораны, кафе, банкетные залы до 200 мест, прогулочный понтон, квадроциклы, водные мотоциклы,
                        конференц-сервис, и многое другое...
                    </Text>

                    <Image
                        source={require('../../../resort2.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        Мы провели полную реконструкцию здания и прилегающей территории; построили 2 бассейна
                        по 25 м; открыли 2 ресторана: основной ресторан à la carte вместимостью около 200 человек, и
                        летний кафе-кафе у бассейна. Специально проработанное меню удовлетворит даже любителей высокой
                        кухни.
                    </Text>

                    <Image
                        source={require('../../../resort3.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        В просторных залах ресторана каждый будет чувствовать себя комфортно. Помещение зонировано под
                        различные нужды. Для проведения банкетов, свадеб, корпоративных мероприятий с большим
                        (до 200-т чел.) количеством посетителей можно использовать общий зал. Деловая встреча или
                        переговоры — в отдельных оборудованных аудиториях вас никто не потревожит.
                    </Text>

                    <Image
                        source={require('../../../resort4.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        В здании гостиницы находится закрытый бассейн размером 25 м с зоной джакузи.
                        Облагородив прибрежную зону, мы построили маяк и сделали возможность спуска на воду малых
                        катеров, яхт и мотоциклов. Полностью современный номерной фонд соответствует высоким
                        требованиям наших гостей.
                    </Text>

                    <Image
                        source={require('../../../resort5.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        Мы также позаботились о Вашем досуге: проводя у нас время, кроме бассейнов, есть возможность
                        взять на прокат водные мотоциклы и квадроциклы.
                        Для маленьких детей есть своя огороженная площадка с аттракционами, работает детский аниматор.
                    </Text>

                    <Image
                        source={require('../../../resort6.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        Совсем недалеко от комплекса находятся охотничьи угодья урочища «Каменная дубина».
                        Для любителей или профессионалов мы организуем отличную охоту на пернатую дичь,
                        пушного зверя, оленя, кабана или косулю.
                    </Text>

                    <Image
                        source={require('../../../resort7.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text}>
                        Кроме прекрасной природы в окрестностях и предоставляемых нами услуг, в относительной близости
                        есть что посмотреть, включая достопримечательности из Золотой подковы Черкащины:
                        заповедник «Трахтемиров», Канев и Каневские горы, Мошногорье, заповедник «Урочище Холодный Яр»,
                        село Суботов, город Чигирин, и другие интересные места с историей...
                    </Text>

                    <Image
                        source={require('../../../resort8.jpg')}
                        resizeMode='stretch'
                        style={styles.img}
                    />

                    <Text style={styles.text1}>
                        ПРИЕЗЖАЙТЕ К НАМ В ГОСТИ...
                        ВАМ ЗДЕСЬ ПОНРАВИТСЯ!
                    </Text>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text1: {
        color: 'white',
        margin: 15,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        margin: 15,
        fontSize: 18,
        textAlign: 'justify'
    },
    img: {
        height: 200,
        width: 300,
        borderRadius: 5
    },
    img1: {
        height: 200,
        width: 200,
        borderRadius: 20,
        margin: 0
    }
});

export default Home;
