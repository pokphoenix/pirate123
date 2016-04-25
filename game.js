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
    Navigator
} from 'react-native';


var Main = require('./page/main');
var Splash = require('./page/splash');
var Play = require('./page/play');
var Pause = require('./page/pause');
var GameOver = require('./page/gameover');


class pirate123 extends Component {

    render() {
        return (
            <Navigator
                style={styles.navigator}
                renderScene={this.renderScene.bind(this)}
                initialRoute={{ title: 'Property Finder', id: 'Splash' }}
                configureScene={(route) => {
                  if (route.sceneConfig) {
                    return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
                />
        );
    }

    renderScene(route, navigator) {

        switch (route.id) {
            case 'Splash':
                return (<Splash navigator={navigator} title="Splash"/>);
            case 'Main':
                return (<Main navigator={navigator} title="Main" />);
            case 'Play':
                return (<Play navigator={navigator} title="Play" />);
            case 'Pause':
                return (<Pause navigator={navigator} title="Pause" />);
            case 'GameOver':
                return (<GameOver navigator={navigator} title="GameOver" />);
        }

        return null ;
    }

}

const styles = StyleSheet.create({

});

export default pirate123;