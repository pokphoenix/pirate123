/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';

var padding = 24 ;
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var contain_w = window.width - ( padding*2 ) ;
var btn_y = contain_w/4.9 ;

var Animatable = require('react-native-animatable');

class Main extends Component {

    _gotoPlay(level, type='Normal') {
        this.props.navigator.push({
            id: 'Play',
            passProps: { gameLevel : level },
            type : type
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={ require('../assets/img/pp_logo.png') }
                        style={styles.logo}
                        />
                </View>

                <TouchableHighlight style={ styles.btn }
                                    underlayColor='#99d9f4'
                                    onPress={() => this._gotoPlay('easy', 'Modal')} >
                    <Image
                        source={ require('../assets/img/btn_easy.png') }
                        style={styles.btn}
                        />
                </TouchableHighlight>

                <TouchableWithoutFeedback onPress={() => this.refs.text.transitionTo({opacity: 0.2})}>
                    <Animatable.Text ref="text">Fade me!</Animatable.Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 30,
        alignItems: 'center'
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },


    logo:{
        width:contain_w,
        height:contain_w/1.2
    },

    btn:{
        flex: 1,
        flexDirection: 'row',
        height: btn_y ,
        width: contain_w,

    },


});

module.exports = Main;