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
export default class CallHistory extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    {/* <View style={styles.headerTitle}>
                        <Text style={{fontSize:22, color:'#02475e',fontFamily:'KhmerOScontent'}}>ប្រវត្តិហៅ</Text>
                    </View> */}
                    <View style={styles.inner}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={()=>{NavigationService.navigate(NAV_TYPES.MSTSHOP)}}>
                                <MaterialIcons
                                    style={{color:'#02475e',marginRight:'20%',fontSize:33}} name="keyboard-arrow-left"> 
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.benner}>
                            <Text style={{fontSize:22, color:'#02475e',fontFamily:'KhmerOScontent'}}>ប្រវត្តិហៅ</Text>
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
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                       <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>មាសសុធា</Text>
                        </View>
                        <View style={styles.dateBox}>
                        <Text style={styles.Date}>០៨​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ពេជ្រ សូវណ្ណច័ន្ទឧត្តម</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>០៩​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>វណ្ណ ក្លូរ</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>១០ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>វណ្ណ កច់</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>១១ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.ready}
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
        position:'relative',
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
    branch:{
        flex: 0.08,
        flexDirection:'row',
        borderBottomColor:'#02475e',
        borderBottomWidth:1,
    },
    ListTitleBox:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    dateBox:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginRight:20,
        // backgroundColor:'yellow'
    },
    ListTitle:{
       color:"#02475e",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
    Date:{
        color:"#02475e",
        fontSize:12,
        marginLeft:20,
        fontFamily:'KhmerOScontent',
     },
    // ready:{
    //     width:'100%',
    //     height:'8%',
    //     flexDirection: 'row',
    //     backgroundColor: '#fb3640',
    //     justifyContent:'center',
    //     alignItems: 'center',
    //     position:'absolute',
    //     bottom:0,
    // },
    // Title:{
    //     fontSize: 20,
    //     color:  '#02475e',
    //     fontFamily:'KhmerOScontent',
    // },
  });
  