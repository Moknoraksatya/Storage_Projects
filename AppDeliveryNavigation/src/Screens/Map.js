import React,{Component} from 'react'

import {
    Text,
    Alert,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native'
import MapView from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get("window");
const formHeight = 200
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class MotoMap extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
    
    render(){
        return(
            <>
            
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : 'height'} 
                        style={styles.container}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 0 :25}
                    >
                        <MapView style={styles.map}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
                        />
                        {/* <View style={styles.Location}>
                            <Text style={styles.myLocation}>My location</Text>
                        </View> */}
                        <View
                            style={styles.formContent}
                        >
                        {/* <View style={styles.inputProTitle}> */}
                            <View style={styles.titleeBox}>
                                <Text style={styles.proTitle}>សូមបញ្ចូលចំនួនអីវ៉ាន់របស់អ្នក</Text>
                            </View>
                            <View style={styles.NumberPackage}>
                                <View style={styles.title}>
                                    <Text style={{color:'white',fontSize:14,fontFamily:'KhmerOScontent',}}>
                                        ចំនួនអីវ៉ាន់ៈ
                                    </Text>
                                </View>
                                <View style={styles.number} >
                                    <TextInput style={styles.inputBox} 
                                        placeholder="បញ្ចូលចំនួន"
                                        placeholderTextColor="#aad8d3"
                                        keyboardType="numeric"
                                        fontSize={14}
                                        borderColor= 'white'
                                        borderBottomWidth= {1}
                                        // borderTopWidth= {1}
                                    />
                                    <View style={styles.Package} >
                                        <Text style={{color:'white',fontSize:14,fontFamily:'KhmerOScontent',}}>កេះ</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <TouchableOpacity style={styles.footer}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MESSAGE)}}>
                            <Text style={styles.ready} >ហៅឥឡូវ</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'orange',
    },
    keyAvoid:{
        //backgroundColor:'red',
        height:'100%'
    },  
    map:{
        width:'100%',
        height: height - formHeight,
        flex:1
    },
    formContent:{
        width:'100%',
        height: formHeight,
        backgroundColor:'#02475e',
        //backgroundColor:'orange',
        //position:'relative'
        alignItems:'center',
        flexDirection:'column'
    },  
    inner:{
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    benner: {
        flex: 0.30,
    },
    benner1: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20,
    },
    mapBox:{
        flex: 0.65,
        flexDirection: 'row',
        // borderWidth:2,
        // borderColor: 'red',
        position: 'relative',
        
    },
    Location:{
        flex: 0.1,
        flexDirection: 'row',
        position: 'absolute',
        marginLeft:"30%",
        justifyContent:'center',
        alignItems:'center',
        top:30,
    },
    titleeBox:{
        flex:.4,
        justifyContent:'center'
    },
    proTitle:{
        
        fontSize: 18,
        color:'white',
        fontFamily:'KhmerOScontent',
        textAlign: 'center',
        marginTop:'3%',
        width:'100%'
    },
    NumberPackage:{
        flex:.4,
        flexDirection:"row",
        //backgroundColor:'red',
        paddingLeft:30,
        paddingRight:30,
        justifyContent:'center'
    },
    inputBox:{
        flex:0.7,
        height:50,
        fontFamily:'KhmerOScontent', 
        color:'#fff'
    },
    Package:{
        flex:0.3,
        height:50,
        fontFamily:'KhmerOScontent', 
        textAlign:'center',
        borderBottomColor:'white',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    title:{
        //flexDirection:'row',
        //backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginBottom:25
    },
    // title:{
    //     flexDirection:'row',
    //     //backgroundColor:'yellow',
    //     // justifyContent:'center',
    //     alignItems:'center',
    //     // marginRight:10
    // },
    number:{
        flex:1,
        flexDirection:'row',
    },
    footer:{
         flex:0.2,
        // flexDirection:'row',
        width:'100%',
        paddingVertical: 8,
        flexDirection: 'row',
        backgroundColor: '#fb3640',
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopColor:'white',
        // borderTopWidth:3, 
        //position:'absolute',
        // marginTop:'11%',
        alignSelf:'flex-end',
        
    },
    ready:{
        fontSize: 18,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },

    // inputProTitle:{
    //     flex: 0.8,
    //     height: 60,
    //     flexDirection: 'row',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:'white',
    //     borderTopColor:'#00516f',
    //     borderTopWidth:3,
    // },
    // PhoneBox:{
    //     // flex:0.01,
    //     flexDirection:"row",
    //     // backgroundColor:'red',
    //     marginTop:'4%',
    //     marginBottom:'24%',
    //     marginLeft:'6%',
    //     marginRight:'6%',
    // },
    // inputBox:{
    //     flex:1,
    //     height:50,
    //     fontFamily:'KhmerOScontent', 
    //     textAlign:'right',
    // },
    // Code:{
    //     flex:0.3,
    //     flexDirection:'row',
    //     // backgroundColor:'yellow',
    //     // justifyContent:'center',
    //     alignItems:'center',
    // },
    // Phone:{
    //     flex:0.67,
    //     flexDirection:'row',
    // },
  
    // PackageBox: {
    //     flex: 0.40,
    //     margin:10,
    //     marginBottom: 0,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },
    // package: {
    //     flex: 0.60,
    //     marginLeft: 5,
    //     marginRight: 10,
    //     marginTop: 0,
    //     marginBottom: 0,
    //     borderTopWidth: 2,
    //     borderBottomWidth: 2,
    //     borderColor:'skyblue',
    //     justifyContent:'center',
    //     alignItems:'flex-end',
    // },
    // inputBox:{
    //     fontSize: 18,
    //     color: '#999b84',
    //     height:60,
    //     fontFamily:'KhmerOScontent',
    // },
    // TotalPackage:{
    //     flex: 0.1,
    //     flexDirection: 'row',
    //     backgroundColor: '#F8F8FF',
    //     borderColor: '#00516f',
    //     borderWidth: 3,
    //     borderRadius: 10,
    //     margin: 20,
    //     marginTop: 5,
    //     alignItems: 'center',
    //     justifyContent : 'center',
    // },
   
  
  });
  