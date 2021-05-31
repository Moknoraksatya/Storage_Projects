
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
import  Loading  from "../Components/Loading";
import React,{Component,Fragment,useState} from 'react'
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
    Modal,
    ToastAndroid,
    Button,
} from 'react-native'

import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';
import { color } from 'react-native-reanimated'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
var hobbies = [
    {label: "ភាសាខ្មែរ", value: "ភាសាខ្មែរ"},
    {label: "English", value: "English"},
    {label: "chinese", value:"chinese"},
];
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            dataInput:{
                phone:'070228666',
                // 070228666
                password:'123456'
                // 123456
            }
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        const {user} = this.props
        if(nextProps.user.userLoginError && nextProps.user.userLoginError !== user.userLoginError){
            if(nextProps.user.userLoginError.data && nextProps.user.userLoginError.data.message && nextProps.user.userLoginError.data.message == "user_not_match"){
                alert('user not match')
            }else{
                alert('something went wrong')
            }
        }
        if(nextProps.user.userLogin && nextProps.user.userLogin !== user.userLogin){
            NavigationService.navigate(NAV_TYPES.MAIN_HOME01)
        }
    }
    
    handleChangeInput(key, value){
        const {dataInput} = this.state
        var val = value
        if(key == 'phone'){
            val = val.replace(/[^0-9]/g, '')
        }
        this.setState({
            dataInput:{
                ...dataInput,
                [key]:val
            }
        })
    }
    handleUserLogin(){
        const {dataInput} = this.state
        var phone = dataInput.phone
        if (phone[0] == '0') {
            phone = phone.substr(1, phone.length - 1)
        }
        phone = "855" + phone
        this.props.userLogin({
            ...dataInput,
            phone: phone
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
                                <TouchableOpacity style={styles.flag} onPress={()=>{this.setState({show:true})}}>
                                    <Image style={{width:"120%",height:"100%"}}
                                        source={require('../Assets/images/Flag.png')}
                                    />
                                </TouchableOpacity>
                                <Modal transparent={true} visible={this.state.show}>
                                    {/* <View style={{backgroundColor:'red',flex:1,justifyContent:'center'}}> */}
                                        <View style={{backgroundColor:'white',margin:30,marginTop:60,flex:0.8,shadowColor: "#000",shadowOffset: {
                                            width: 0,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.37,
                                        shadowRadius: 7.49,
                                        elevation: 12,}}>
                                            <View style={styles.popUpTitle}>
                                                <Text style={{fontSize:18,fontFamily:'KhmerOScontent',color:'white'}}>ភាសា</Text>
                                            </View>
                                            <View style={styles.listBox}>
                                                <FontAwesome name="circle-thin" size={25} color={'#005792'}> </FontAwesome>
                                                <Text style={styles.radioTitle}>ភាសាខ្មែរ</Text>
                                            </View>
                                            <View style={styles.listBox}>
                                                <FontAwesome name="circle-thin" size={25} color={'#005792'}> </FontAwesome>
                                                <Text style={styles.radioTitle}>English</Text>
                                            </View>
                                            <View style={styles.listBox}>
                                                <FontAwesome name="circle-thin" size={25} color={'#005792'}> </FontAwesome>
                                                <Text style={styles.radioTitle}>Chinese</Text>
                                            </View>
                                            <TouchableOpacity style={styles.footerBtn}
                                                onPress={()=>{this.setState({show:false})}}>
                                                <Text style={{fontSize:18,fontFamily:'KhmerOScontent',color:'white'}}>រួចរាល់</Text>
                                            </TouchableOpacity>
                                        </View>
                                    {/* </View> */}
                                </Modal>
                            </View>
                            <View style={styles.HeaderImage}>
                                <Image style={{width:190,height:170}}
                                    source={require('../Assets/images/logoMST.png')}
                                />
                            </View>
                            <Text style={styles.HeaderTitle}>
                                ចូលគណនី
                            </Text> 
                            <TextInput style={styles.inputBox}
                                placeholder="បញ្ចូលលេខទូរស័ព្ទ"
                                placeholderTextColor="grey"
                                keyboardType="numeric"
                                color='black'
                                fontSize={14}
                                value={dataInput.phone}
                                onChangeText={(value) => this.handleChangeInput('phone', value)}
                                maxLength={10}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="បញ្ចូលពាក្យសម្ងាត់"
                                placeholderTextColor="grey"
                                keyboardType="text"
                                color='black'
                                fontSize={16}
                                marginBottom={'3%'}
                                secureTextEntry={true}
                                value={dataInput.password}
                                onChangeText={(value) => this.handleChangeInput('password', value)}
                            />
                            <TouchableOpacity style={styles.btnSignIn}
                                onPress={() => this.handleUserLogin()} 
                                >
                                <Text style={styles.signInTitle}>ចូលគណនី</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.register}
                                onPress={() => NavigationService.navigate(NAV_TYPES.REGISTER)} >
                                <Text style={styles.registerLink}>ចុះឈ្មោះគណនី</Text>
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
        // backgroundColor: '#02475e',
    },

    language:{
        flex:0.1,
        flexDirection:'row',
        // backgroundColor:'red',
    },
    inner:{
        // flex: 0.2,
        // flexDirection: 'row',
        fontSize: 16,
        padding: 10,
        height: 60,
        // justifyContent: 'flex-end',
        alignItems:'flex-end',
        position:'relative',
        // backgroundColor: 'yellow',
    },
    flag:{
        flex:0.8,
        width:45,
        // height:'90%',
        flexDirection:'column',
        backgroundColor:'red',
        paddingRight:'2%',
    },
    popUpTitle:{
        flex:0.12,
        flexDirection:'row',
        backgroundColor:'#005792',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderBottomColor:'white',
        borderBottomWidth:1,
        
    },
    listBox:{
        backgroundColor:'white',
        flex:0.10,
        flexDirection:'row',
        color:'white',
        paddingLeft:20,
        alignItems:'center',
        borderBottomColor:'#005792',
        borderBottomWidth:1,
    },
    radioTitle:{
        fontSize:16,
        fontFamily:'KhmerOScontent',
        marginTop:2,
        color:'#005792',
    },
    footerBtn:{
        // flex:0.10,
        height:50,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        // top:'63%',
        position:'absolute',
        bottom:0,

    },
    HeaderImage:{
        flex: 0.3,
        height:130,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    HeaderTitle:{
        fontSize: 20,
        color: '#005792',
        textAlign: 'center',
        fontFamily:'KhmerOScontent',
        margin:'10%',
        marginBottom:'5%',
        marginTop:'0%'
    },
    inputBox:{
        flex:1,
        flexDirection:"row",
        // borderBottomColor: '#ffffff',
        borderBottomColor: '#005792',
        borderBottomWidth: 1,
        fontFamily:'KhmerOScontent', 
        marginLeft:"10%",
        marginRight:"10%"
    },
    SignInHeader:{
        flex: 0.1,
        fontSize: 16,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn:{
        fontSize: 18,
        color: '#344fa1',
    },
    btnSignIn:{
        fontSize: 18,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        fontFamily:'KhmerOScontent',
        backgroundColor:'#005792',
    },
    signInTitle:{
        fontSize: 20,
        color: 'white',
        fontFamily:'KhmerOScontent',
    },
    register:{
        flex: 0.15,
        fontSize: 16,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerLink:{
        fontSize: 16,
        color: '#005792',
        fontFamily:'KhmerOScontent',
    },
})






// import React,{Component} from 'react'
// import {Text, StyleSheet, SafeAreaView, TouchableOpacity, View, Image, TextInput} from 'react-native'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import NavigationService from '../Service/navigationService'
// import {NAV_TYPES} from '../Navigation/navTypes'
// import  Loading  from "../Components/Loading/";
// export default class Login extends Component{
//     constructor(prop){
//         super(prop)
//         this.state = {
//             dataInput:{
//                 phone:'085995530',
//                 password:'12345678'
//             }
//         }
//     }

//     UNSAFE_componentWillReceiveProps(nextProps){
//         const {user} = this.props
//         if(nextProps.user.userLoginError && nextProps.user.userLoginError !== user.userLoginError){
//             if(nextProps.user.userLoginError.data && nextProps.user.userLoginError.data.message && nextProps.user.userLoginError.data.message == "user_not_match"){
//                 alert('user not match')
//             }else{
//                 alert('something went wrong')
//             }
//         }
//     }

//     handleChangeInput(key, value){
//         const {dataInput} = this.state
//         var val = value
//         if(key == 'phone'){
//             val = val.replace(/[^0-9]/g, '')
//         }
//         this.setState({
//             dataInput:{
//                 ...dataInput,
//                 [key]:val
//             }
//         })
//     }
//     handleUserLogin(){
//         const {dataInput} = this.state
//         var phone = dataInput.phone
//         if (phone[0] == '0') {
//             phone = phone.substr(1, phone.length - 1)
//         }
//         phone = "855" + phone
//         this.props.userLogin({
//             ...dataInput,
//             phone: phone
//         })
//     }
//     render(){
//         const {dataInput} = this.state
//         const {user} = this.props
//         return(
//             <>
//                 {user.pending &&
//                     <Loading/>
//                 }
//                 <View style={ styles.container}>
//                     <View style={styles.header}>
//                         <Image
//                             style={styles.logo}
//                             source={require('../Assets/images/logoMST.png')}
//                         />
//                     </View>
//                     <View style={styles.box}>
//                         <SafeAreaView>
//                             <TextInput
//                                 style={styles.input}
//                                 keyboardType={'numeric'}
//                                 placeholder="លេខទូរស័ព្ទ"
//                                 value={dataInput.phone}
//                                 onChangeText={(value) => this.handleChangeInput('phone', value)}
//                                 maxLength={10}
//                             />
//                         </SafeAreaView>
//                         <SafeAreaView>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="លេខសំងាត់"
//                                 secureTextEntry={true}
//                                 value={dataInput.password}
//                                 onChangeText={(value) => this.handleChangeInput('password', value)}
//                             />
//                         </SafeAreaView>
//                     </View>
//                     <View style={styles.text}>
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress={() => this.handleUserLogin()} 
//                         >
//                             <Text style={styles.color}>ចូលគណនី</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center',
//     },
//     header:{
//         marginTop:15,
//     },
//     logo:{
//         width: 200,
//         height: 125,
//     },
//     input:{
//         margin: 10,
//         height: 50,
//         width:280,
//         borderRadius:25,
//         borderWidth: 2,
//         borderColor:'#00716F',
//         paddingHorizontal:30,
//         fontSize:16,
//     },
//     button:{
//         margin: 10,
//         backgroundColor:'blue',
//         height: 50,
//         width:180,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:25,
//     },
//     color:{
//         color:'white',
//         fontFamily:'KhmerOScontent',
//         fontSize:15,
//     },
//     button1:{
//         margin: 10,
//         height: 50,
//         width:180,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:25,
//     },
//     color1:{
//         color:'#00716F',
//         fontFamily:'KhmerOScontent',
//         fontSize:15,
//     },
// })