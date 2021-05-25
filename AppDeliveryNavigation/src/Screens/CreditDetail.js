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
export default class CreditDetail extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}> 
                    <View flex={0.1}
                        style={{
                            borderBottomColor: '#02475e',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CHANGENSHOP)}}>
                       <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>MST Shop</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>ប្តូរឈ្មោះគណនី</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CHANGEPHONE)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>0965054500</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>ប្តូរលេខទូរស័ព្ទ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CHANGEBANK)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ABA</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>ប្តូរឈ្មោះស្ថាប័ន</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CHANGEUSERNAME)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>MEASSOTHEA</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>ប្តូរឈ្មោះគណនីធនាគា</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CHANGEBANKNUM)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>049999499</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>ប្តូរលេខគណនីធនាគា</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREATEPASS)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle} style={{color:"#02475e",
                                fontSize:20,
                                marginLeft:20,
                                fontWeight:'bold'
                                }}>************</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>លេខសម្ងាត់</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREATEPASS)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle} style={{color:"#02475e",
                                fontSize:20,
                                marginLeft:20,
                                fontWeight:'bold'
                                }}>************</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>លេខសម្ងាត់ថ្មី</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREATEPASS)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle} style={{color:"#02475e",
                                fontSize:20,
                                marginLeft:20,
                                fontWeight:'bold'
                                }}>************</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.Date}>បញ្ជាក់លេខសម្ងាត់ថ្មី</Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.readyBtn}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MAIN_HOME01)}}>
                        <Text style={styles.btnTitle}>រួចរាល់</Text>
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
    branch:{
        flex: 0.08,
        flexDirection:'row',
        borderBottomColor:'#02475e',
        borderBottomWidth:1,
    },
    ListTitleBox:{
        flex:0.55,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    iconBox:{
        flex:0.45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginEnd:20,
        // backgroundColor:'yellow'
    },
    ListTitle:{
       color:"#02475e",
       fontSize:14,
       marginLeft:20,
       fontWeight:'bold'
    },
    Date:{
        color:"#02475e",
        fontSize:12,
        marginLeft:20,
        fontFamily:'KhmerOScontent',
     },
     readyBtn:{
        flex:0.08,
        flexDirection:'row',
        backgroundColor:'#02475e',
        margin:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
     },
     btnTitle:{
        color:"white",
        fontSize:18,
        fontFamily:'KhmerOScontent',
     },
  });
  