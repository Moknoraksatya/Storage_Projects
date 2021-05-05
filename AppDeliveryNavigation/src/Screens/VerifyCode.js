
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
import React,{Component,Fragment} from 'react'
import { RadioButton } from 'react-native-paper';
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
export default class Login extends Component{
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
                                <Text style={styles.signIn}>សូមរងចាំ ទទួលសារ​</Text>
                            </View>
                            <View style={styles.SignInHeader}>
                                <Text style={styles.signIn}> លេខកូដ ៦ ខ្ទង់</Text>
                            </View>
                            <View style={styles.code}>
                                <TextInput style={styles.inputBox}
                                    
                                />  
                                 <TextInput style={styles.inputBox}
                                    
                                /> 
                                
                                <TextInput style={styles.inputBox}
                                    
                                /> 
                                <TextInput style={styles.inputBox}
                                   
                                /> 
                                <TextInput style={styles.inputBox}
                                    
                                /> 
                                <TextInput style={styles.inputBox}
                                   
                                />  
                            </View>
                            
                            
                            <TouchableOpacity style={styles.btnSignIn}
                                onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                                <Text style={styles.signInTitle}>ចូលគណនី</Text>
                            </TouchableOpacity>
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
        flex: 0.2,
        flexDirection: 'row',
        fontSize: 16,
        padding: 10,
        // height: 110,
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
        flex: 0.1,
        fontSize: 16,
        // height: 30,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    signIn:{
        fontSize: 20,
        color: '#1E90FF',
    },
    code:{
        height: 40,
        flexDirection:'row',
        marginTop: 50,
        marginBottom: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox:{
        width: '11%',
        // backgroundColor: 'yellow',
        borderWidth:2,
        borderColor:'#000080',
        borderRadius: 5,
        margin:5 ,
        marginTop: 0,
        marginBottom:0, 

    },
    inputText:{
        fontSize: 20,
        color: 'grey',
        paddingLeft: 20,
    },
    btnSignIn:{
        fontSize: 16,
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
        flex: 0.15,
        fontSize: 16,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    registerLink:{
        fontSize: 18,
        color: '#1E90FF',
    },
})