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
import Ionicons from 'react-native-vector-icons/Ionicons'


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Message extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.CircleTick}>
                        {/* <View style={styles.Tick}>
                            <Image style={{marginTop:-90,width:'90%',height:"90%"}}
                                source={require('../Assets/images/searchW001.png')}
                            />
                            <Ionicons style={styles.Tickicon} name="ios-checkmark-sharp" > </Ionicons>
                        </View> */}
                        <Image style={{width:150,height:150}}
                            source={require('../Assets/images/DefentTick.png')}
                        />
                    </View>
                    {/* <View style={styles.MessageBox}> */}
                       <Text style={styles.MeassageTitle}>
                            ការហៅរបស់លោកអ្នកទទួលបានជោគជ័យហើយ។សូមរងចាំការទាក់ទងពីយើងខ្ញុំបន្តិចទៀតនេះ សូមអរគុណ...!
                       </Text>
                    {/* </View> */}

                    <TouchableOpacity style={styles.ready}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                        <Text style={styles.Title}>រួចរាល់</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.successImageBox}>
                        <Image
                            style={{width:150,height:150}}
                            source={require('../Assets/images/suprise.png')}
                        />
                    </View> */}
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
    CircleTick:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor:'red',
        marginTop:'5%'
    },
    Tick:{
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: '#32CD32',
        justifyContent:'center',
        alignItems: 'center',
    },
    Tickicon:{
        fontSize: 70,
        color: 'white',
        paddingLeft: 25,
    },
    MeassageTitle:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontFamily:'KhmerOScontent',
        marginLeft: 28,
        marginRight: 28,
        marginTop:"5%"
    },
    ready:{
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: '#30cc25',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: '30%',
        marginRight: '30%',
        // borderRadius:50,
        marginTop:'5%'
    },
    Title:{
        fontSize: 18,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },
    successImageBox:{
        flex: 0.25,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        top:'5%'
        // backgroundColor:'red'
    },
  });
  