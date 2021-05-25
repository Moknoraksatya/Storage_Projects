
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
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
        this.state={
           
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        return(
            <>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                    <ScrollView style={{flex:1}}>
                    
                            {/* <View style={styles.inner}>
                                <View style={styles.benner}>
                                    <Image
                                        style={styles.centerLogo}
                                        source={require('../Assets/images/logoMST.png')}
                                    />
                                </View>     
                            </View>                    */}
                            {/* <View style={styles.SignInHeader}>
                                <Text style={styles.signIn}>ចូលគណនី</Text>
                            </View> */}


                            {/* <Button title="ភាសា" onPress={()=>{this.setState({show:true})}}></Button> */}
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
                            {/* <TextInput style={styles.inputBox}
                                placeholder="លេខទូរស័ព្ទ"
                                placeholderTextColor="grey"
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="លេខសម្ងាត់"
                                placeholderTextColor="grey"
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                            /> */}
                            <TextInput style={styles.inputBox}
                                placeholder="បញ្ចូលលេខទូរស័ព្ទ"
                                placeholderTextColor="grey"
                                keyboardType="text"
                                color='black'
                                fontSize={12}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="បញ្ចូលពាក្យសម្ងាត់"
                                placeholderTextColor="grey"
                                keyboardType="text"
                                color='black'
                                fontSize={12}
                                marginBottom={'3%'}
                            />
                            <TouchableOpacity style={styles.btnSignIn}
                                onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
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

        // fontSize:18,textAlign:'center',
        // justifyContent:'center',
        // alignItems:'center',
        // paddingLeft:'5%',
        // paddingTop:25,
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
        // borderRadius: 50,
        // borderColor: '#1E90FF',
        // backgroundColor:'#fb3640',
        backgroundColor:'#005792',
        
        // borderWidth: 2,
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
        // backgroundColor:'#02475e'
    },
    registerLink:{
        fontSize: 16,
        color: '#005792',
        fontFamily:'KhmerOScontent',
    },
   
    // benner: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 10,
    // },
    // centerLogo: {
    //     flex: 1,
    //     width: 150,
    //     height: 100,
    // },
    // inputBox:{
    //     flex: 0.05,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginLeft:'10%',
    //     marginRight:'10%',
    //     borderRadius: 50,
    //     borderColor: '#000080',
    //     borderWidth: 2,
    //     fontSize: 18,
    //     padding: 10,
    //     paddingLeft: 15,
    //     height: 45,
    //     margin: 12,
    //     borderWidth: 1,   
    // },
    
    // inputText:{
    //     fontSize: 20,
    //     color: 'grey',
    //     paddingLeft: 20,
    // },
   
})