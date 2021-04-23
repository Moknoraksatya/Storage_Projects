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
                    <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>     
                    </View>
                    <View style={styles.menuBox}>
                        <View style={styles.menuBox1}>
                            <View style={styles.menuType1}>
                                <TouchableOpacity
                                    onPress={()=>{NavigationService.navigate(NAV_TYPES.RECEIPT)}}>
                                    <FontAwesome5 style={styles.icon} name="box" size={35} color={'orange'}> </FontAwesome5>
                                </TouchableOpacity>
                                <Text style={styles.title}>ស្វែងរកអតិថិជន</Text>
                            </View> 
                        </View> 
                        <View style={styles.menuBox2}>
                            <View style={styles.menuType2}>
                                <TouchableOpacity
                                    onPress={()=>{NavigationService.navigate(NAV_TYPES.FLOW)}}>
                                    <FontAwesome5 style={styles.icon} name="search" size={35} color={'red'}> </FontAwesome5>
                                </TouchableOpacity>
                                <Text style={styles.title}>ស្វែងរកអតិថិជន</Text>
                            </View> 
                        </View> 
                    </View> 
                    <View style={styles.menuBox}>
                        <View style={styles.menuBox1}>
                            <View style={styles.menuType1}>
                                <TouchableOpacity
                                    onPress={()=>{NavigationService.navigate(NAV_TYPES.SCREEN_02)}}>
                                    <Entypo style={styles.icon} name="blackboard" size={35} color={'red'}> </Entypo>
                                </TouchableOpacity>
                                <Text style={styles.title}>ស្វែងរកអតិថិជន</Text>
                            </View> 
                        </View> 
                        <View style={styles.menuBox2}>
                            <View style={styles.menuType2}>
                            <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.BILL)}}>
                                <FontAwesome5 style={styles.icon} name="money-check-alt" size={35} color={'orange'}> </FontAwesome5>
                            </TouchableOpacity>
                            <Text style={styles.title}>ស្វែងរកអតិថិជន</Text>
                            </View> 
                        </View> 
                    </View> 
                    <View style={styles.carOwner}>
                        <View style={styles.imgBox}>
                        <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.RECEIPT)}}>
                                <MaterialCommunityIcons style={styles.icon} name="truck" size={60} color={'orange'}> </MaterialCommunityIcons>
                            </TouchableOpacity>
                        
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.FooterTitle}>ហាងហៅដឹក</Text>
                        </View>
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
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        alignItems: 'center',
    },
    centerLogo: {
        flex: 1,
        width: 170,
        height: 100,
        marginTop: -15,
    },
    menuBox:{
        flex: 0.34,
        flexDirection: 'row',
        marginTop:10,
        // backgroundColor:'yellow',
    },
    menuBox1:{
        flex: 0.5,
        flexDirection: 'row',
        // backgroundColor:'yellow',
        justifyContent: 'center',
    },
    menuBox2:{
        flex: 0.5,
        flexDirection: 'row',
        // backgroundColor:'red',
        justifyContent: 'center',
    },
    menuType1:{
        flex: 0.9,
        flexDirection: 'column',
        marginLeft: 20,
        backgroundColor:'#234c91',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
    menuType2:{
        flex: 0.9,
        flexDirection: 'column',
        marginRight: 20,
        backgroundColor:'#234c91',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'
        },
    title:{
        fontSize: 18,
        color:'white',
        marginTop: 10,
    },
    carOwner:{
        flex: 0.17,
        flexDirection: 'row',
        backgroundColor:'#234c91',
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 15,
        alignItems: 'center',
        paddingLeft: 2,
        
    },

    imgBox:{
        flex: 0.4,
        flexDirection: 'row',
        justifyContent:'center',
    },
    titleBox:{
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    FooterTitle:{
        fontSize: 20,
        color: 'white'
    },
  });
  