
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
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
                                <Text style={styles.signIn}>ចុះឈ្មោះគណនី</Text>
                            </View>
                            {/* <TextInput style={styles.inputBox}
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
                            /> */}
                           
                          <TextInput
                              style={styles.inputBox}
                              placeholder="ឈ្មោះហាង"
                              
                          />
                      
                          <TextInput
                              style={styles.inputBox}
                              placeholder="លេខទូរស័ព្ទ"
                              
                          />
                     
                          <TextInput
                              style={styles.inputBox}
                              placeholder="លេខសម្ងាត់"
                              
                          />
                     
                          <TextInput
                              style={styles.inputBox}
                              placeholder="បញ្ជាក់លេខសម្ងាត់"
                              
                          />
                     
                          <TextInput
                              style={styles.inputBox}
                              placeholder="ឈ្មោះគណនីABA"
                              
                          />
                     
                          <TextInput
                              style={styles.inputBox}
                              placeholder="លេខគណនីABA"
                              
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
    // innerAction:{
    //     marginTop:10,
    //     height:70,
    //     flexDirection:'row',
    //     // borderWidth: 5,
    //     // borderColor:'gray'
    // },
    // bennerOrange:{
    //     flex:.2,
    // },
    // bennerBlue:{
    //     flex:0.87,
    //     borderTopWidth:1,
    //     borderBottomWidth:1,
    //     justifyContent:'center'
    // },
    // tinyLogo: {
    //     width: 70,
    //     height: 70,

    // },
    // text:{
    //     fontSize:24
    // },



    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    inner:{
        // flex: 0.2,
        // flexDirection: 'row',
        // fontSize: 16,
        // padding: 10,
        height: 70,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        // flex: 1,
        height: 70,
        // justifyContent: 'center',
        alignItems: 'center',
        // margin: 10,
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
})