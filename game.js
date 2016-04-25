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


var Main = require('./main');

class pirate123 extends Component {

    render() {
        return (
            <Navigator
                style={styles.navigator}
                renderScene={this.renderScene.bind(this)}
                initialRoute={{ title: 'Property Finder', component: 'Main' }}
                />
        );
    }

    renderScene(route, navigator) {
        var routeId = route.component;
        if (routeId === 'Main') {
            return (
                <Main
                    navigator={navigator} />
            );
        }
        return null ;
    }

}

const styles = StyleSheet.create({

});

export default pirate123;