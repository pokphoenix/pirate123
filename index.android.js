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
    TextInput
} from 'react-native';

var padding = 24 ;

var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var btn_x = window.width - ( padding*2 ) ;
var btn_y = btn_x/4.9 ;



class pirate123 extends Component {

  _onPressButton(index){
    console.log(index+'Click');
  }

  onSearchPressed() {
    alert.alert('click');
    console.log('Click');
  }

  render() {
    return (
    <View style={styles.container}>

    

      <View style={styles.flowRight}>
        <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'/>
        <TouchableHighlight style={styles.button}
                            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={ styles.btn }
                          underlayColor='#99d9f4'
                          onPress={this._onPressButton('easy')} >
        <Image
            source={ require('./assets/img/btn_easy.png') }
            style={styles.btn}
            />
      </TouchableHighlight>

    </View>





    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  logo:{
    flex: 1,
    resizeMode:'contain'
  },

  btn:{
    flex: 1,
    flexDirection: 'row',
    height: btn_y ,
    width: btn_x
  },


});

AppRegistry.registerComponent('pirate123', () => pirate123);
