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
    BackAndroid
} from 'react-native';




class Play extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataSource: props.level
        };


    }


    render() {
        return (
            <View style={styles.container}>
               <Text>Play Page</Text>
                <Text>My value: {this.state.dataSource}</Text>
                <Text>Level : {this.props.gameLevel}</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

});

module.exports = Play;