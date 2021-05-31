
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
import React,{Component,Fragment} from 'react'
import  Loading  from "../Components/Loading";
import { RadioButton } from 'react-native-paper';
import SMSVerifyCode from 'react-native-sms-verifycode'
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
    Alert,
} from 'react-native'
export default class VerifyCode extends Component{
    constructor(prop){
        super(prop)
        this.state={
           dataInput:true,
           code:'123456'
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        const {user} = this.props
        const {dataInput} = this.state
        if(nextProps.user.userRegisterError && nextProps.user.userRegisterError !== user.userRegisterError){
            alert('something went wrong')
        }
        if(nextProps.user.userRegister && nextProps.user.userRegister !== user.userRegister){
            NavigationService.navigate(NAV_TYPES.MAIN_HOME01, {data: dataInput})
        }
    }
    handleChangeInput(key, value){
        const {dataInput} = this.state
        var val = value
        this.setState({
            dataInput:{
                ...dataInput,
                [key]:val
            }
        })
    }
    async componentDidMount(){
        const { navigation } = this.props;
        var data = await navigation.getParam('data', false);
        console.log(data);
        this.setState({
            dataInput:data,
            code:'123456'
        })
    }
    handleUserRegister(){
        const { dataInput, code } = this.state;
        var password = dataInput.password
        var confirmPassword = dataInput.confirmPassword
        // if (password != confirmPassword) {
        //     alert('Password not match')
        // }else{
        //     this.props.userRegister({
        //         ...dataInput,
        //         smsCode:code 
        //     })
        // }
        this.props.userRegister({
            ...dataInput,
            smsCode:code 
        })
    }
    render(){
        const {dataInput} = this.state
        const {user} = this.props
        return(
            <>
                {user.pending &&
                    <Loading/>
                }
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
                            <Text style={styles.HeaderTitle}>
                                សូមរងចាំ ទទួលសារ​
                            </Text>   
                            <Text style={styles.HeaderTitle}>
                                លេខកូដ ៦ ខ្ទង់​
                            </Text>           
                            <View style={styles.code}>
                                <SMSVerifyCode
                                    ref={ref => (this.verifycode = ref)}
                                    onInputCompleted={this.onInputCompleted}
                                    containerPaddingHorizontal={35}
                                    verifyCodeLength={6}
                                    codeFontSize={18}
                                    codeViewBorderWidth={3}
                                    codeViewBorderRadius={5}
                                    codeViewBorderColor="#005792"
                                    secureTextEntry="password"
                                    value={dataInput.code}
                                    onChangeText={(value) => this.handleChangeInput('code', value)}
                                />
                            </View>
                        <TouchableOpacity style={styles.btnSignIn}
                            onPress={() => this.handleUserRegister()} >
                            <Text style={styles.signInTitle}> ចូលបន្ទាប់</Text>
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
        backgroundColor: '#fff',
    },
    inner:{
        flex: 0.2,
        flexDirection: 'row',
        fontSize: 16,
        // padding: 10,
        // height: 110,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        
    },
    centerLogo: {
        flex: 1,
        width: 180,
        height: 100,
        marginTop:10,
    },
    HeaderTitle:{
        fontSize: 20,
        color: '#005792',
        textAlign: 'center',
        fontFamily:'KhmerOScontent',
        margin:'10%',
        marginBottom:'0%',
        marginTop:'0%',
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
        borderColor:'#005792',
        borderRadius: 5,
        margin:5 ,
        marginTop: 0,
        marginBottom:0, 
        textAlign:'center'
    },
    inputText:{
        fontSize: 20,
        color: 'grey',
        paddingLeft: 20,
    },
    btnSignIn:{
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'12%',
        marginRight:'12%',
        fontSize: 20,
        padding: 7,
        height: 50,
        marginTop:0,
        backgroundColor: '#005792',
        alignItems: 'center',
        borderRadius: 5,
    },
    signInTitle:{
        fontSize: 16,
        color: 'white',
        fontFamily:'KhmerOScontent'
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




  {/* <TextInput style={styles.inputBox}
                                
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
                                   
                                />   */}