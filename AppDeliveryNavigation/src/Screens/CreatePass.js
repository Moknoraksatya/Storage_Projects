import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get("window");
const formHeight = 73
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class CreatePass extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <ScrollView style={styles.container}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.keyAvoid}>
                        <View style={styles.upBox}>
                            <View style={styles.headerImage}>
                                <Image style={{width:120,height:120}}
                                    source={require('../Assets/images/lock.png')}
                                />
                            </View>
                            
                            <Text style={styles.MeassageTitle}>
                                    បង្កើតពាក្យសម្ងាត់
                            </Text>
                            <TextInput style={styles.inputBox}
                                placeholder="ពាក្យសម្ងាត់ចាស់"
                                placeholderTextColor="#cae4db"
                                keyboardType="text"
                                color='white'
                                fontSize={12}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="ពាក្យសម្ងាត់ថ្មី"
                                placeholderTextColor="#cae4db"
                                keyboardType="text"
                                color='white'
                                fontSize={12}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="បញ្ជាក់ពាក្យសម្ងាត់ថ្មី"
                                placeholderTextColor="#cae4db"
                                keyboardType="text"
                                color='white'
                                fontSize={12}
                            />
                            <Text style={{marginLeft:'10%',marginTop:10,fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                ពាក្យសម្ងាត់ត្រូវតែជាអក្សរអង់គ្លេស ហើយត្រូវមាន:
                            </Text>
                            <AntDesign style={styles.tinyLogo} name="checkcircle" color={'#aad8d3'} style={{marginLeft:'10%',marginTop:'5%',fontSize:13,fontFamily:'KhmerOScontent',}}>
                                <Text style={{fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                {'  '}យ៉ាងតិចណាស់ ៥ តួ
                                </Text>
                            </AntDesign>
                            <AntDesign style={styles.tinyLogo} name="checkcircle" color={'#aad8d3'} style={{marginLeft:'10%',fontSize:13,fontFamily:'KhmerOScontent'}}>
                                <Text style={{paddingLeft:10,fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                {'  '}រួមបញ្ចូលអក្សរធំ (A-Z)
                                </Text>
                            </AntDesign>
                            <AntDesign style={styles.tinyLogo} name="checkcircle" color={'#aad8d3'} style={{marginLeft:'10%',fontSize:13,fontFamily:'KhmerOScontent'}}>
                                <Text style={{fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                {'  '}រួមបញ្ចូលអក្សរតូច (a-z)
                                </Text>
                            </AntDesign>
                            <AntDesign style={styles.tinyLogo} name="checkcircle" color={'#aad8d3'} style={{marginLeft:'10%',fontSize:13,fontFamily:'KhmerOScontent'}}>
                                <Text style={{fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                {'  '}រួមបញ្ចូលលេខ (0-9)
                                </Text>
                            </AntDesign>
                            <AntDesign style={styles.tinyLogo} name="checkcircle" color={'#aad8d3'} style={{marginLeft:'10%',fontSize:13,fontFamily:'KhmerOScontent'}}> 
                                <Text style={{fontSize:14,fontFamily:'KhmerOScontent',color:'#cae4db'}}>
                                    {'  '}និងមិនត្រូវបញ្ចូល ឈ្មោះ ឬនាមត្រកូលអ្នកឡើយ
                                </Text>
                            </AntDesign>
                        </View> 
                        <View style={styles.formContent}>
                            <TouchableOpacity style={styles.footer}
                                onPress={() => NavigationService.navigate(NAV_TYPES.CREDITDETAIL)} >
                                <Text style={styles.ready}>រួចរាល់</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </KeyboardAvoidingView>    
                </ScrollView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#02475e',
    },
    keyAvoid:{
        //backgroundColor:'red',
        height:'100%'
    },  
    upBox:{
        width:'100%',
        height: height - formHeight,
    },
    formContent:{
        width:'100%',
        height: formHeight-24,
        backgroundColor:'#02475e',
        position:'relative'
    }, 
    headerImage:{
        flex: 0.6,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        top:20,
        // backgroundColor:'red'
    },

    MeassageTitle:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily:'KhmerOScontent',
        margin:'10%',
        marginBottom:'5%',

    },
    inputBox:{
        flex:0.08,
        flexDirection:"row",
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        fontFamily:'KhmerOScontent', 
        marginLeft:"10%",
        marginRight:"10%"
    },
    footer:{
        // flex:0.3,
        // flexDirection:'row',
        width:'100%',
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#fb3640',
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopColor:'white',
        // borderTopWidth:3, 
        position:'absolute',
        // marginTop:'11%',
        bottom:"0%",
        alignSelf:'flex-end'
    },
    ready:{
        fontSize: 18,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },
    // successImageBox:{
    //     flex: 0.25,
    //     flexDirection: 'row',
    //     justifyContent:'center',
    //     alignItems: 'center',
    //     top:'15%'
    //     // backgroundColor:'red'
    // },
    
    
  });
  