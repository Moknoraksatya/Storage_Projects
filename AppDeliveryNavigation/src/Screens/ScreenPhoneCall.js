import React,{Component,Fragment} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
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
                
                    {/* <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>     
                    </View>                   
                    <View style={styles.SignInHeader}>
                        <Text style={styles.signIn}>ចូលគណនី</Text>
                    </View> */}
                    {/* <View style={styles.inputBox}> */}
                    {/* <SafeAreaView>
                        <TextInput style={styles.inputBox}
                            placeholder="Email"
                            placeholderTextColor="grey"
                            returnKeyType='email-address'
                            // secureTextEntry
                            autoCorrect={false}
                        />
                    </SafeAreaView> */}
                        {/* <Text style={styles.inputText}> លេខទូរស័ព្ទ</Text> */}
                    {/* </View> */}

                   



                {/* <TextInput style={styles.inputBox}
                                placeholder="Email"
                                placeholderTextColor="grey"
                                returnKeyType='email-address'
                                // secureTextEntry
                                autoCorrect={false}
                            /> */}












                    {/* <SafeAreaView>
                        <TextInput style={styles.inputBox}
                            placeholder="Password"
                            placeholderTextColor="grey"
                            returnKeyType='numberic'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </SafeAreaView> */}
                    {/* <View style={styles.inputBox}>
                        <Text style={styles.inputText}> លេខសម្ងាត់</Text>
                    </View> */}
                    {/* <View style={styles.btnSignIn}>
                        <Text style={styles.signInTitle}> សូមចូលគណនី</Text>
                    </View>


                    <TouchableOpacity style={styles.register}
                        onPress={() => NavigationService.navigate(NAV_TYPES.REGISTER)} >
                        <Text style={styles.registerLink}>ចុះឈ្មោះគណនី</Text>
                    </TouchableOpacity> */}

                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                    <Fragment>
                        <SafeAreaView style={{ flex:0,zIndex:1 }} >
                            
                        </SafeAreaView>
                        <SafeAreaView style={styles.background_mode}>
                            <View style={styles.inner}>
                                <View style={styles.benner}>
                                    <Image
                                        style={styles.centerLogo}
                                        source={require('../Assets/images/logoMST.png')}
                                    />
                                </View>     
                            </View>                   
                            <View style={styles.SignInHeader}>
                                <Text style={styles.signIn}>ចូលគណនី</Text>
                            </View>
                            <TextInput style={styles.inputBox}
                                placeholder="Email"
                                placeholderTextColor="grey"
                                returnKeyType='email-address'
                                // secureTextEntry
                                autoCorrect={false}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                returnKeyType='numberic'
                                secureTextEntry
                                autoCorrect={false}
                            />
                            <View style={styles.btnSignIn}>
                                <Text style={styles.signInTitle}> សូមចូលគណនី</Text>
                            </View>
                            <TouchableOpacity style={styles.register}
                                onPress={() => NavigationService.navigate(NAV_TYPES.REGISTER)} >
                                <Text style={styles.registerLink}>ចុះឈ្មោះគណនី</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Fragment>
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
        // flex: 0.2,
        flexDirection: 'row',
        // fontSize: 16,
        // padding: 10,
        height: 110,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    centerLogo: {
        flex: 1,
        width: 150,
        height: 100,
    },
    SignInHeader:{
        // flex: 0.1,
        fontSize: 16,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn:{
        fontSize: 20,
        color: '#1E90FF',
    },
    inputBox:{
        // flex: 0.05,
        // flexDirection: 'row',
        // alignItems: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        // margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
        fontSize: 16,
        padding: 10,
        height: 40,
        margin: 12,
        borderWidth: 1,
        
    },
    inputText:{
        fontSize: 20,
        color: 'grey',
        paddingLeft: 20,
    },
    btnSignIn:{
        fontSize: 16,
        // padding: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#4682B4',
        backgroundColor:'#4682B4',
        borderWidth: 2,
    },
    signInTitle:{
        fontSize: 20,
        color: 'white',
    },
    register:{
        // flex: 0.1,
        fontSize: 16,
        // padding: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerLink:{
        fontSize: 20,
        color: '#1E90FF',
    },

    background_mode:{
        flex:1,
        flexDirection:'column',

    },
    backgroud_top:{
        height:60,
        flexDirection:"column",
     
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        paddingBottom:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
//   container: {
//         flex: 1
//       },
  });
  