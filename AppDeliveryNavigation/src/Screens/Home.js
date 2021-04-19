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
                            <FontAwesome style={styles.tinyLogo} name="bell" size={20} color={'#000080'}> </FontAwesome>
                        </View>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.SCREEN_02)}}
                            >
                            <View style={styles.benner}>
                                <FontAwesome style={styles.rightLogo} name="navicon" size={28} color={'#000080'}> </FontAwesome>
                            </View>  
                        </TouchableOpacity>

                                 
                    </View>
                    <View style={styles.ads}>
                        <View style={styles.bennerAds}>
                            <Image
                                style={styles.adsImage}
                                source={require('../Assets/images/top-benner.jpg')}
                            />
                        </View>
                    </View>

                    <View style={styles.order}>
                        <View style={styles.deliverBox}>
                            <View style={styles.deliverImage} >
                                <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}
                                >
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/motoW1.jpg')}
                                />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ម៉ូតូ</Text>
                            </View>
                        </View>
                        <View style={styles.deliverBox} >
                            <View style={styles.deliverImage} >
                                <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}
                                >
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/tuktukW1.png')}
                                />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>រម៉ក</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.check}>
                        <View style={styles.deliverBox}>
                            <View style={styles.deliverImage}>
                            <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}
                                >
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/CarW1.png')}
                                />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ឡាន</Text>
                            </View>
                        </View>
                        <View style={styles.deliverBox} >
                            <View style={styles.deliverImage}>
                            <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.FLOW)}}>
                                <FontAwesome5 style={styles.icon} name="search" size={35} color={'#808080'}> </FontAwesome5>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ឆែកឥវ៉ាន់</Text>
                            </View>
                        </View>                        
                    </View>
                    <View style={styles.ads}>
                        <View style={styles.bennerAds}>
                            <Image
                                style={styles.adsImage}
                                source={require('../Assets/images/bottom-benner.jpg')}
                            />
                        </View>
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
    btn:{
        flex: 1,
    },
    inner:{
        flex: 0.15,
        flexDirection: 'row'
    },
    benner: {
        flex: 1,
        backgroundColor: 'white',
    },
    tinyLogo:{
        width: 25,
        height: 25,
        marginTop: 14,
        marginLeft: 12,
    },
    centerLogo: {
        width: 150,
        height: 83,
    },
    rightLogo: {
        width: 50,
        height: 50,
        marginTop: 12,
        marginLeft: 70,
        paddingLeft: 12,
    },
    ads:{
        flex: 0.25,
        flexDirection: 'row',
    },
    bennerAds: {
        flex: 1,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
    },
    adsImage:{
        width: '100%',
        height:'100%',
    },
    orderBox: {
        flex: 1,
        margin:10,
        marginBottom: 0,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
    },
   Title:{
        fontSize: 23,
        color:'black',
    },
    order:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    deliver:{
        width: 100,
        height: 85,
    },

    check:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'white',    
    },
    deliverBox:{
        flex: 0.5,
        flexDirection: 'column',
    },
    deliverImage:{
        flex: 0.65,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    deliverTitle:{
        flex: 0.35,
        flexDirection: 'row',
        justifyContent:'center',

    },
    checkBox: {
        flex: 1,
        margin:10,
        marginBottom: 0,
        borderColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
    },
  });
  