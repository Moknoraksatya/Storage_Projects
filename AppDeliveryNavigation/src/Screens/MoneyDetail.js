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
export default class MoneyDetail extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>

                    <TouchableOpacity style={styles.branchHeader}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                       <View style={styles.HeaderTitleBox}>
                            <Text style={styles.HeaderTitle}>បញ្ជីសរុប</Text>
                        </View>
                        <View style={styles.HeaderRigthBox}>
                        <Text style={styles.HeaderTitle}>០៨​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>

                    <View 
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                       <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ឈ្មោះអ្នកដឹក</Text>
                        </View>
                        <View style={styles.dateBox}>
                        <Text style={styles.ListTitle}>មាស សុធា</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ឥវ៉ាន់ជោគជ័យ</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>10 កញ្ចប់</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>តម្លៃឥវ៉ាន់</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>90$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.BRANCH)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>តម្លៃសេវា</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.ListTitle}>30000៛</Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <View style={styles.bill}>
                        <Text style={{textAlign:'center',fontSize:17,color:"white",
                            fontFamily:'KhmerOScontent',top:10}}>ទូទាត់ថ្លៃឥវ៉ាន់
                        </Text>
                        <Text style={{textAlign:'center',fontSize:40,color:"white",
                            fontFamily:'KhmerOScontent',}}>90$
                        </Text>
                        <Text style={{textAlign:'center',fontSize:17,color:"white",
                            fontFamily:'KhmerOScontent'}}>ទូទាត់ថ្លៃសេវា
                        </Text>
                        <Text style={{textAlign:'center',fontSize:40,color:"white",
                            fontFamily:'KhmerOScontent'}}>30000៛
                        </Text>
                        {/* <Image
                            style={{width:160,height:160}}
                            source={require('../Assets/images/suprise.png')}
                        /> */}
                    </View>
                    <TouchableOpacity style={styles.ready}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MSTSHOP)} >
                        <Text style={styles.Title}>រួចរាល់</Text>
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
        position:'relative'
    },
    branchHeader:{
        flex: 0.08,
        flexDirection:'row',
        marginTop:20
    },
    HeaderTitleBox:{
        flex:0.35,
        flexDirection:'row',
        alignItems:'center',

    },
    HeaderTitle:{
        color:"white",
        fontSize:17,
        marginLeft:30,
        fontFamily:'KhmerOScontent',
    },
    HeaderRigthBox:{
        flex:0.65,
        flexDirection:'row',
        alignItems:'center',
        fontFamily:'KhmerOScontent',
        justifyContent:'flex-end',
        marginEnd:20,
    },
    branch:{
        flex: 0.07,
        flexDirection:'row',
    },
    ListTitleBox:{
        flex:0.55,
        flexDirection:'row',
        alignItems:'center',
    },
    dateBox:{
        flex:0.45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginEnd:20,
    },
    ListTitle:{
       color:"white",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
    bill:{
        flex:0.6,
        alignItems:'center',
    },
    ready:{
        width:'100%',
        height:'8%',
        flexDirection: 'row',
        backgroundColor: '#fb3640',
        justifyContent:'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
    },
    Title:{
        fontSize: 20,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },
  });
  