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
export default class Money extends Component{
   
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
                        <Text style={{fontSize:22, color:'white',fontFamily:'KhmerOScontent',}}></Text>
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
                            <Text style={{fontSize:22, color:'#02475e',fontFamily:'KhmerOScontent'}}>ប្រវត្តិទូទាត់ប្រាក់</Text>
                        </View>   
                        <View style={styles.btnBack}>

                        </View>
                    </View>
                    <View flex={0.01}
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MONEYDETAIL)}}>
                       <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ</Text>
                        </View>
                        <View style={styles.dateBox}>
                        <Text style={styles.ListTitle}>០៨​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MONEYDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>០៩​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MONEYDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>១០ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MONEYDETAIL)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>១១ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.back}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MSTSHOP)} >
                        <Text style={styles.Title}>ត្រឡប់ក្រោយ</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#02475e',
        position:"relative"
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
        borderBottomColor:'white',
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
        marginEnd:20,
        // backgroundColor:'yellow'
    },
    ListTitle:{
       color:"white",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
    back:{
        width:'100%',
        height:50,
        flexDirection: 'row',
        backgroundColor: '#fb3640',
        justifyContent:'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
    },
    Title:{
        fontSize: 18,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },
  });
  