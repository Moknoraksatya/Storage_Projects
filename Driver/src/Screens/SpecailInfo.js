import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Home extends Component{
   
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
                        <View style={styles.benner}>
                            <Text style={styles.text}> ព័ត៍មានលម្អិតពីការដឹក​​ </Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                       <View style={styles.col1} >
                            <Text style={styles.titleDetail}>#123456</Text>
                       </View>
                       <View style={styles.col2}>
                            
                       </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail}>កាលបរិច្ឆេទ.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail}>៖ ៥ មេសា ២០២១</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ទំនិញ.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ សៀវភៅ</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ទីតាំងទទួល</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 017999844</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ពីហាង.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ MST Shop</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >លេខហាង.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 086995253</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail}>អ្នកដឹក.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ វេងសេង</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >លេខអ្នកដឹក.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail}>៖ 0975523392</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >តម្លៃសរុប.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 10$</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ស្ថានភាព.</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖​ <Text style={styles.status} >កំពុងដឹក</Text></Text>
                        </View>
                    </View>
                    <View style={styles.callBox}>
                        <TouchableOpacity style={styles.callCustomer } 
                            onPress={() => NavigationService.navigate(NAV_TYPES.MENU)}  >
                            <Text style={styles.callTitle}> ខលទៅអ្នកទទួល</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.callBox}>
                        <TouchableOpacity style={styles.callDeliver}
                            onPress={() => NavigationService.navigate(NAV_TYPES.MENU)} >
                            <Text style={styles.callTitle}> ខលទៅអ្នកដឹក</Text>
                        </TouchableOpacity>
                    </View>
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
    inner:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text:   {
     fontSize: 30,
     color: 'black',
    },
    row:{
        flex: 0.06,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    col1:{
        flex: 0.27,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    col2:{
        flex: 0.73,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleDetail:{
        fontSize: 18,
    },
    status:{
        fontSize: 18,
        color: '#32CD32'
    },
    callBox:{
        flex: 0.1,
        flexDirection: 'row',
        top: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    callCustomer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#32CD32',
    },
    callDeliver:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#234c91',
    },
    callTitle:{
        fontSize:20,
        color: 'white',
    },
  });
  