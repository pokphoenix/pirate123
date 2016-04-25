
 Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var contain_w = window.width - ( padding*2 ) ;
var btn_y = contain_w/4.9 ;



class Main extends Component {

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
                    <Image
                        source={ require('./assets/img/pp_logo.png') }
                        style={styles.logo}
                        />
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