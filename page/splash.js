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
    Image
} from 'react-native';

class Splash extends Component {

    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.push({
                id: 'Main',
            });
        }, 3000);
    }
    render() {
        return (
            <View style={styles.splashContainer}>
                <Image
                    source={ require('../assets/img/pp_logo.png') }
                    style={styles.splash}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    splashContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    splash:{
        flex: 1,
        resizeMode :'contain'
    },
});

module.exports = Splash;