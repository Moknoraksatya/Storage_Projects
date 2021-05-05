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
import { color } from 'react-native-reanimated'
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
                            <FontAwesome style={styles.tinyLogo} name="bell" size={30} color={'#ffffff'}> </FontAwesome>
                        </View>
                        <View style={styles.bennerLogo} >
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.HISTORY)}}
                            >
                            <View style={styles.benner}>
                                <FontAwesome style={styles.rightLogo} name="navicon" size={33} color={'#ffffff'}> </FontAwesome>
                            </View>  
                        </TouchableOpacity>       
                    </View>
                    {/* <View style={styles.ads} backgroundColor={'red'}>
                        <View style={styles.bennerAds} >
                            <Image
                                style={styles.adsImage}
                                source={require('../Assets/images/top-benner.jpg')}
                            />
                        </View>
                    </View> */}

                    <View style={styles.orderBox}>
                    <View style={styles.order}>
                        <TouchableOpacity style={styles.deliverBox}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}>
                            <View style={styles.deliverImage} >
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/motoW1.png')}
                                />
                            </View>
                            <View style={styles.deliverTitle} >
                            <Text style={styles.Title}>ហៅម៉ូតូ</Text>
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white', fontSize:11}}>សម្រាប់ដឹកទំនិញចំនួនតិច</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deliverBox}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}
                                >
                            <View style={styles.deliverImage} >
                                
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/tuktukW1.png')}
                                />
                                
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ហៅរម៉ក</Text>
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white', fontSize:11}}>សម្រាប់ដឹកទំនិញចំនួនមធ្យម</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.check}>
                    <TouchableOpacity style={styles.deliverBox}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}>
                            <View style={styles.deliverImage}>
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/CarW1.png')}
                                />
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ហៅឡាន</Text>
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white', fontSize:11}}>សម្រាប់ដឹកទំនិញចំនួនច្រើន</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deliverBox}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.FLOW)}}
                            >
                            <View style={styles.deliverImage}>
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/searchW001.png')}
                                />
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ឆែកឥវ៉ាន់</Text>
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white' , fontSize:11}}>ឆែកដំណើការដឹកជញ្ជូន</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.ads}>
                        <View style={styles.bennerAds}>
                        <Text style={{color:'white',marginTop:-15,fontSize:25}}>.....</Text>
                            <Image
                                style={styles.adsImage}
                                source={require('../Assets/images/Benner-bottom.jpg')}
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
        backgroundColor: '#02475e',
    },
    btn:{
        flex: 1,
    },
    inner:{
        flex: 0.1,
        flexDirection: 'row'
    },
    benner: {
        flex: 0.2,
        // backgroundColor: 'white',
        // backgroundColor:'red'
        justifyContent:'center',
        alignItems:'center',
    },
    bennerLogo: {
        flex: 0.8,
        // backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
    },
    tinyLogo:{
        // width: 50,
        // height: 50,
        // marginTop: 14,
        marginLeft: 12,
    },
    centerLogo: {
        width: 130,
        height: 130,
        marginTop:-10,
    },
    rightLogo: {
        width: 45,
        height: 40,
        // padding: 5,
        paddingLeft: 10,
        // backgroundColor: 'grey',
        marginTop: 38,
        marginRight: 15,
    },
    ads:{
        flex: 0.38,
        flexDirection: 'row',
        paddingBottom:10,
        padding:15,
    },
    bennerAds: {
        flex: 1,
        // justifyContent:'center',
        alignItems:'center',
        margin: 0,
        // backgroundColor:'red',
        marginTop:-10,
    },
    adsImage:{
        width: '100%',
        height:'80%',
    },

    orderBox: {
        flex: 0.52,
        margin:15,
        marginBottom: 0,
        marginTop:0,
    },
   Title:{
        fontSize: 18,
        color:'white',
    },
    TitleBox:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    smallTitle:{
        fontSize: 16,
        color:'black',
    },
    order:{
        flex: 0.5,
        // height: 200,
        flexDirection: 'row',
        
    },
    deliver:{
        width: 140,
        height: 140,
    },

    check:{
        flex: 0.5,
        // height: 200,
        flexDirection: 'row',    
    },
    deliverBox:{
        flex: 0.6,
        flexDirection: 'column',
        backgroundColor: '#0061a8',
        margin: 2,
        borderRadius: 15,
    },
    deliverImage:{
        flex: 0.65,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    deliverTitle:{
        flex: 0.18,
        flexDirection: 'row',
        justifyContent:'center',

    },
    deliverTitle1:{
        flex: 0.17,
        flexDirection: 'row',
        justifyContent:'center',
        // backgroundColor:'green'
        
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
  