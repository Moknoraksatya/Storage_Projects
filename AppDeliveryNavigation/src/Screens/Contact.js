import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'
export default class Contact extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.headerTitle}>
                        <Text style={{fontSize:22, color:'white',fontFamily:'KhmerOScontent',}}>ទំនាក់ទំនងក្រុមហ៊ុន</Text>
                    </View>
                    <View style={styles.ContactBox}>
                        <View style={styles.PhoneBox} >
                            <View style={styles.iconBox}>
                                {/* <Text>1</Text> */}
                                <MaterialIcons style={styles.call} name="phone-in-talk"> </MaterialIcons>
                            </View>
                        </View>
                        <View style={styles.MessageBox}  >
                            <View style={styles.iconBox1}>
                                {/* <Text>1</Text> */}
                                <Fontisto style={styles.messeger} name="messenger"> </Fontisto>
                            </View>
                        </View>
                    </View>
                    <View flex={0.05}
                        style={{
                            borderBottomColor: '#02475e',
                            borderBottomWidth: 3, Top:0,
                            backgroundColor:'#02475e',
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <Text style={styles.ListTitle}>សាខាទួលសង្កែ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <Text style={styles.ListTitle}>សាខាឬស្សីកែវ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <Text style={styles.ListTitle}>សាខាឈូកមាស</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <Text style={styles.ListTitle}>សាខាទួលគោក</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    headerTitle:{
        flex: 0.1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#02475e',
    },
    ContactBox:{
        flex: 0.2,
        flexDirection:'row',
        backgroundColor:'#02475e',
    },
    PhoneBox:{
        flex:0.5,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'white',
        // margin:10,
    },
    MessageBox:{
        flex:0.5,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green',
        // margin:10,
    },
    iconBox:{
        // maxHeight:'85%',
        // maxWidth:'57%',
        width:'60%',
        height:'85%',
        resizeMode:'contain',
        backgroundColor:'white',
        marginLeft:55,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    iconBox1:{
        width:'60%',
        height:'85%',
        // maxHeight:'100%',
        // maxWidth:'100%',
        resizeMode:'contain',
        backgroundColor:'white',
        marginRight:55,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    // contactImage:{
    //     width:80,
    //     height:80,
    // },
    call:{
        marginLeft:14,
        fontSize: 65,
        color:'#02475e',
        alignSelf:'center',
    },
    messeger:{
        marginLeft:25,
        fontSize: 57,
        color:'#02475e',
        alignSelf:'center',
    },
    branch:{
        flex: 0.08,
        flexDirection:'row',
        borderBottomColor:'#02475e',
        borderBottomWidth:1,
        alignItems:'center',
    },
    ListTitle:{
       color:"#02475e",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
  });
  




//   <View style={styles.Contact}>
//                             {/* <Image
//                                 style={styles.contactImage}
//                                 source={require('../Assets/images/cell-phone.png')}
//                             /> */}
//                             <MaterialIcons style={styles.phone} name="phone-in-talk"> </MaterialIcons>
//                         </View>
//                         <View style={styles.Contact} marginLeft={5}>
//                             <Fontisto style={styles.messeger} name="messenger"> </Fontisto>
//                         </View>