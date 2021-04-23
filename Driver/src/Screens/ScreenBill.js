import React,{Component, version} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class SignIn extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.BoxImage}>
                        {/* <View style={styles.BankLogo}> */}
                        <TouchableOpacity style={styles.BankLogo}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.BILL)}}>
                                <Image 
                                style={styles.Image} 
                                source={require('../Assets/images/aba.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BankLogo}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.BILL)}}>
                            <Image
                                style={styles.Image}
                                source={require('../Assets/images/acleda.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BoxImage}>
                        <TouchableOpacity style={styles.BankLogo}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.BILL)}}>
                            <Image
                                style={styles.Image}
                                source={require('../Assets/images/wing.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BankLogo}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.BILL)}}>
                            <Image
                                style={styles.Image}
                                source={require('../Assets/images/prince.png')}
                            />
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
    BoxImage:{
        flex:0.3,
        flexDirection:'row',
        margin: 20,
        marginBottom: 0,
    },
    BankLogo:{
        flex:0.5,
        flexDirection:'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        margin: 20,
    },
    Image:{
        width: '100%',
        height: '100%',
    },
  });
  