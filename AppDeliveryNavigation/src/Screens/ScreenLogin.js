import React,{Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        return(
            <>
                
                <View style={styles.innerAction}>
                    <View style={styles.bennerOrange}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../Assets/images/ships-icons-set_1284-11537.jpeg')}
                        />
                    </View>
                    <View style={styles.bennerBlue}>
                        <Text style={styles.text}>ABC</Text>
                    </View>
                </View>
                <View style={styles.innerAction}>
                    <View style={styles.bennerOrange}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../Assets/images/ships-icons-set_1284-11537.jpeg')}
                        />
                    </View>
                    <View style={styles.bennerBlue}>
                        <Text style={styles.text}>ABC</Text>
                    </View>
                </View>
                <View style={styles.innerAction}>
                    <View style={styles.bennerOrange}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../Assets/images/ships-icons-set_1284-11537.jpeg')}
                        />
                    </View>
                    <View style={styles.bennerBlue}>
                        <Text style={styles.text}>ABC</Text>
                    </View>
                </View>
                <View style={styles.innerAction}>
                    <View style={styles.bennerOrange}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../Assets/images/ships-icons-set_1284-11537.jpeg')}
                        />
                    </View>
                    <View style={styles.bennerBlue}>
                        <Text style={styles.text}>ABC</Text>
                    </View>
                </View>
                
            </>
        )
    }
}

const styles = StyleSheet.create({
    innerAction:{
        marginTop:10,
        height:70,
        flexDirection:'row',
        // borderWidth: 5,
        // borderColor:'gray'
    },
    bennerOrange:{
        flex:.2,
    },
    bennerBlue:{
        flex:0.87,
        borderTopWidth:1,
        borderBottomWidth:1,
        justifyContent:'center'
    },
    tinyLogo: {
        width: 70,
        height: 70,

    },
    text:{
        fontSize:24
    },
})