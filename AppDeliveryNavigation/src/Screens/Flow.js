import React,{Component} from 'react'
import {Text,StyleSheet,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class ResultPackage extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        } 
    }
    render(){
        return(
            <>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Text style={styles.text}> តាមដានការដឹក​​ </Text>
                        </View>
                    </View>
                    
                    {/* <View style={styles.TotalPackage}> */}
                        <TextInput style={styles.inputBox} 
                            placeholder={'សូមវាយបញ្ចូលលេខកូដឥវ៉ាន់'} 
                            fontFamily={'KhmerOScontent'}
                            keyboardType="text"
                            >
                            
                        </TextInput>
                    {/* </View>  */}
                    <View style={styles.containSceneBox}>
                        <View style={styles.scaneBox}>
                        <TouchableOpacity
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFO)}}>
                            <Image
                                style={styles.ScaneImage}
                                source={require('../Assets/images/hand-phone.png')}
                            />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ScaneBoxTitle}>
                       <Text style={styles.ScaneTitle}>សូមចុចលើរូបខាងលើដើម្បីស្កេន</Text>
                    </View>
                    <View style={styles.qrCode} marginBottom={'55%'}>
                       <Text style={styles.qrCodeTitle}>QR Code</Text>
                    </View>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
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
        marginTop:20,
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text:{
        fontSize: 20,
        color: '#005792',
        fontFamily:'KhmerOScontent'
    },
    inputBox:{
        flex: 0.1,
        flexDirection: 'row',
        // backgroundColor: '#F8F8FF',
        // borderColor: 'grey',
        // borderColor: 'red',
        // borderWidth: 3,
        borderRadius: 10,
        margin: 50,
        marginTop: 2,
        textAlign:'center',
        fontSize: 14,
        color:'grey',
        height: 50,
        color:'black',
        borderBottomColor: '#005792',
        borderBottomWidth: 1,
        fontFamily:'KhmerOScontent', 
        
    },
    // TotalPackage:{
    //     flex: 0.1,
    //     flexDirection: 'row',
    //     backgroundColor: '#F8F8FF',
    //     borderColor: 'grey',
    //     // borderColor: 'red',
    //     borderWidth: 3,
    //     borderRadius: 10,
    //     margin: 40,
    //     marginTop: 2,
    //     alignItems: 'center',
    //     justifyContent : 'center',
    // },

    containSceneBox:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    scaneBox: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScaneImage:{
        width: 120,
        height: 150,
    },

    ScaneBoxTitle:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 30,
    },
    ScaneTitle:{
        fontSize: 16,
        color: '#005792',
        textAlign: 'center',
        fontFamily:'KhmerOScontent',
    },
    qrCode:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    qrCodeTitle:{
        fontSize: 16,
        color: '#005792',
        textAlign: 'center',
        fontFamily:'KhmerOScontent'
    },
  });
  