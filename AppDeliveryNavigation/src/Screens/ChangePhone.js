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
export default class ChangePhone extends Component{
   
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
                        <View style={styles.map}>
                            <View style={styles.headerImage}>
                                <Image style={{width:120,height:120}}
                                    source={require('../Assets/images/phone.png')}
                                />
                            </View>
                            <Text style={styles.MeassageTitle}>
                                លេខទូរស័ព្ទថ្មី
                            </Text>
                            <Text style={{fontSize:12,marginLeft:'10%',fontFamily:'KhmerOScontent',color:'white'}}>លេខកូដប្រទេស</Text>
                            <View style={styles.PhoneBox}>
                                <View style={styles.Code}  >
                                    <TextInput style={styles.inputBox}
                                        placeholder="+855"
                                        placeholderTextColor="white"
                                        color='white'
                                        fontSize={14}
                                    />
                                </View>
                                <View style={styles.Phone}>
                                    <TextInput style={styles.inputBox} 
                                        placeholder="បញ្ចូលលេខទូរស័ព្ទថ្មី"
                                        placeholderTextColor="#cae4db"
                                        keyboardType="numeric"
                                        color='white'
                                        fontSize={12}
                                    />
                                </View>
                            </View>
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
    map:{
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
        flex: 0.3,
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
        // marginLeft:'10%',
        // marginRight:'10%'
        margin:'10%',
        marginBottom:'10%',
    },
    PhoneBox:{
        // flex:0.01,
        flexDirection:"row",
        // backgroundColor:'red',
        paddingLeft:'10%',
        paddingRight:'10%',
    },
    inputBox:{
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        flex:1,
        height:50,
        fontFamily:'KhmerOScontent', 
    },
    Code:{
        flex:0.26,
        flexDirection:'row',
        
    },
    Phone:{
        flex:0.74,
        flexDirection:'row',
        marginLeft:15,
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
    
  });
  