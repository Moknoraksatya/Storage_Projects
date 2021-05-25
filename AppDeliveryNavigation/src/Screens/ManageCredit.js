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
export default class ManageCredit extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    
                    <View style={styles.inner}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={()=>{NavigationService.navigate(NAV_TYPES.MSTSHOP)}}>
                                <MaterialIcons
                                    style={{color:'#02475e',marginRight:'20%',fontSize:33}} name="keyboard-arrow-left"> 
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.benner}>
                            <Text style={{fontSize:22, color:'#02475e',fontFamily:'KhmerOScontent'}}>គ្រប់គ្រងគណនី</Text>
                        </View>   
                        <View style={styles.btnBack}>

                        </View>
                    </View>
                    <View flex={0.01}
                        style={{
                            borderBottomColor: '#02475e',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREDITDETAIL)}}>
                       <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ឈ្មោះគណនី</Text>
                        </View>
                        <View style={styles.iconBox}>
                        <Text style={styles.ListTitle}>MST Shop</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREDITDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>លេខទូរសព្ទ័</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.ListTitle}>0965054500</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREDITDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ឈ្មោះស្ថាប័ន​​ធនាគា</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.ListTitle}>ABA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREDITDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ឈ្មោះគណនី​​ធនាគា</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.ListTitle}>MEASSOTHEA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CREDITDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>លេខគណនី​​ធនាគា</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Text style={styles.ListTitle}>049999499</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>លុបគណនី</Text>
                        </View>
                        <View style={styles.iconBox}>
                            {/* <Text style={styles.ListTitle}>១១ , ឧសភា , ២០២១</Text> */}
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.back}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MSTSHOP)} >
                        <Text style={styles.Title}>ត្រឡប់ក្រោយ</Text>
                    </TouchableOpacity> */}
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white', 
        position:'relative'
    },
    branch:{
        flex: 0.08,
        flexDirection:'row',
        borderBottomColor:'#02475e',
        borderBottomWidth:1,
    },
    inner:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    benner: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 10,
        // backgroundColor:'red',
    },
    btnBack:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',
    },
    // headerTitle:{
    //     flex: 0.1,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },
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
        justifyContent: 'flex-end',
        marginEnd:20,
    },
    ListTitle:{
       color:"#02475e",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
    // back:{
    //     width:'100%',
    //     height:'8%',
    //     flexDirection: 'row',
    //     backgroundColor: '#02475e',
    //     justifyContent:'center',
    //     alignItems: 'center',
    //     position:'absolute',
    //     bottom:0,
    // },
    // Title:{
    //     fontSize:18,
    //     color:  'white',
    //     fontFamily:'KhmerOScontent',
    // },
  });
  