import React,{Component} from 'react'
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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>     
                    </View>
                    <View style={styles.SignInHeader}>
                        <Text style={styles.signIn}>ចុះឈ្មោះគណនី</Text>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> ឈ្មោះហាង</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> លេខទូរស័ព្ទ</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> លេខសម្ងាត់</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> បញ្ចាក់លេខសម្ងាត់</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> ឈ្មោះគណនីABA</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> លេខគណនីABA</TextInput>
                    </View>

                    <TouchableOpacity style={styles.btnSignIn}
                        onPress={() => NavigationService.navigate(NAV_TYPES.VERIFYCODE)} >
                        <Text style={styles.signInTitle}> ចូលគណនី</Text>
                    </TouchableOpacity>
{/* 
                    <View style={styles.btnSignIn}>
                        <Text style={styles.signInTitle}> ចូលគណនី</Text>
                    </View> */}
                    
                    <TouchableOpacity style={styles.SignInHeader}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                        <Text style={styles.signIn}>ចូលគណនី</Text>
                    </TouchableOpacity>
                    
                {/* </View> */}
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
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerLogo: {
        flex: 1,
        width: 150,
        height: 100,
    },
    SignInHeader:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn:{
        fontSize: 20,
        color: '#1E90FF',
    },
    inputBox:{
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
        fontSize: 16,
        padding: 10,
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: 'grey',
    },
    // inputText:{
    //     fontSize: 20,
    //     color: 'grey',
    //     paddingLeft: 20,
    // },
    btnSignIn:{
        // flex: 0.5,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginLeft:'10%',
        // marginRight:'10%',
        // margin: 10,
        // borderRadius: 50,
        // borderColor: '#4682B4',
        // backgroundColor:'#4682B4',
        // borderWidth: 2,
        flex: 0.5,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
        fontSize: 16,
        padding: 7,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#000080',
    },
    signInTitle:{
        fontSize: 16,
        color: 'white',
    },
  });
  