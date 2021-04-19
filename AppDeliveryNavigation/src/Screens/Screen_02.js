import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'

import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Screen_02 extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        } 
    }
    render(){
        return(
            <>
            <View style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.benner}>
                        <Image
                            style={styles.centerLogo}
                            source={require('../Assets/images/logoMST.png')}
                        />
                    </View>     
                </View>
            {/* LIST  */}
                <View style={styles.inner1}>
                    <View style={styles.benner1}>
                        <Image
                            style={styles.Logo}
                            source={require('../Assets/images/edit.png')}
                        />
                    </View>

                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner2}>
                            <Text style={styles.text}>ប្រវត្តិបញ្ញើសរុប</Text>
                        </View>   
                    </TouchableOpacity>

                          
                </View>
                <View style={styles.inner1}>
                    <View style={styles.benner1}>
                        <Image
                            style={styles.Logo}
                            source={require('../Assets/images/verify1.png')}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner3}>
                            <Text style={styles.text}>ប្រវត្តិបញ្ញើជោគជ័យ</Text>
                        </View>     
                    </TouchableOpacity>
                           
                </View>
                <View style={styles.inner1}>
                    <View style={styles.benner1} color={'yellow'}>
                        <Image
                            style={styles.Logo}
                            source={require('../Assets/images/info.png')}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner3}>
                            <Text style={styles.text}>ប្រវត្តិបញ្ញើបរាជ័យ</Text>
                        </View>     
                    </TouchableOpacity>
                            
                </View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },  
    inner:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        marginRight: 10,
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner1:{
        flex: 0.1,
        flexDirection: 'row'
    },
   
    benner1: {
        flex: 0.30,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    benner2: {
        flex: 1,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    benner3: {
        flex: 1,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 20,
        color: 'skyblue',
    },
    centerLogo: {
        flex: 1,
        width: 150,
        height: 80,
       
    },
    Logo: {
        flex: 0.8,
        width: 50,
        height: 45,
        marginLeft: 20,
    },
 
  });
  