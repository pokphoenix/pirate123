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
    Animated,
    TouchableWithoutFeedback
} from 'react-native';


var ACTION_TIMER = 400;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

class Play extends Component {

    getInitialState() {
        return {
            pressAction: new Animated.Value(0),
            textComplete: '',
            buttonWidth: 0,
            buttonHeight: 0
        };
    }
    componentWillMount() {
        this._value = 0;
        this.state.pressAction.addListener((v) => this._value = v.value);
    }
    handlePressIn() {
        Animated.timing(this.state.pressAction, {
            duration: ACTION_TIMER,
            toValue: 1
        }).start(this.animationActionComplete);
    }
    handlePressOut() {
        Animated.timing(this.state.pressAction, {
            duration: this._value * ACTION_TIMER,
            toValue: 0
        }).start();
    }
    animationActionComplete() {
        var message = '';
        if (this._value === 1) {
            message = 'You held it long enough to fire the action!';
        }
        this.setState({
            textComplete: message
        });
    }
    getButtonWidthLayout(e) {
        this.setState({
            buttonWidth: e.nativeEvent.layout.width - 6,
            buttonHeight: e.nativeEvent.layout.height - 6
        });
    }
    getProgressStyles() {
        var width = this.state.pressAction.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.state.buttonWidth]
        });
        var bgColor = this.state.pressAction.interpolate({
            inputRange: [0, 1],
            outputRange: COLORS
        });
        return {
            width: width,
            height: this.state.buttonHeight,
            backgroundColor: bgColor
        }
    }

    render() {

        console.log('Game Level : '+this.props.gameLevel);

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                    >
                    <View style={styles.button} onLayout={this.getButtonWidthLayout}>
                        <Animated.View style={[styles.bgFill, this.getProgressStyles()]} />
                        <Text style={styles.text}>Press And Hold Me</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text>{this.state.textComplete}</Text>
                </View>
            </View>
        );
    }
    //constructor(props) {
    //    super(props);
    //
    //    console.log(this.props.gameLevel);
    //
    //    this.state = {
    //        fadeAnim: new Animated.Value(0), // init opacity 0
    //    };
    //}
    //componentDidMount() {
    //    Animated.timing(          // Uses easing functions
    //        this.state.fadeAnim,    // The value to drive
    //        {toValue: 1}            // Configuration
    //    ).start();                // Don't forget start!
    //}
    //render() {
    //    return (
    //        <Animated.View          // Special animatable View
    //            style={{opacity: this.state.fadeAnim, // Binds directly
    //                   transform: [{
    //                     translateY: this.state.fadeAnim.interpolate({
    //                       inputRange: [0, 1],
    //                       outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
    //                     }),
    //                   }],}}>
    //            {this.props.children}
    //        </Animated.View>
    //    );
    //}

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        borderWidth: 3,
        borderColor: '#111'
    },
    text: {
        backgroundColor: 'transparent',
        color: '#111'
    },
    bgFill: {
        position: 'absolute',
        top: 0,
        left: 0
    }

});

module.exports = Play;