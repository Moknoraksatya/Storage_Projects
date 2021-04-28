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
                            {/* <FontAwesome style={styles.tinyLogo} name="bell" size={20} color={'#000080'}> </FontAwesome> */}
                        </View>
                        <View style={styles.benner}>
                            {/* <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            /> */}
                        </View>

                        <TouchableOpacity
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.SCREEN_02)}}
                            >
                            <View style={styles.benner}>
                                <FontAwesome style={styles.rightLogo} name="navicon" size={28} color={'#000080'}> </FontAwesome>
                            </View>  
                        </TouchableOpacity>       
                    </View>
                    <View style={styles.ads} backgroundColor={'red'}>
                        <View style={styles.bennerAds} >
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
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}>
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/motoW1.jpg')}
                                />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white'}}>សម្រាប់ដឹកទំនិញចំនួនតិច</Text>
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
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white'}}>សម្រាប់ដឹកទំនិញចំនួនមធ្យម</Text>
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
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white'}}>សម្រាប់ដឹកទំនិញចំនួនច្រើន</Text>
                            </View>
                        </View>
                        <View style={styles.deliverBox} >
                            <View style={styles.deliverImage}>
                            <TouchableOpacity
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.MAP01)}}
                                >
                                <Image
                                    style={styles.deliver}
                                    source={require('../Assets/images/motoW01.jpg')}
                                />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deliverTitle} >
                                <Text style={styles.Title}>ឆែកឥវ៉ាន់</Text>
                            </View>
                            <View style={styles.deliverTitle1} >
                                <Text style={{color:'white'}}>ឆៃកដំណើការដឹកជញ្ជូន</Text>
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
        flex: 0.08,
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
        flex: 0.21,
        flexDirection: 'row',
    },
    bennerAds: {
        flex: 1,
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
        flex: 0.25,
        // height: 200,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    deliver:{
        width: 150,
        height: 150,
    },

    check:{
        flex: 0.25,
        // height: 200,
        flexDirection: 'row',
        backgroundColor: 'white',    
    },
    deliverBox:{
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: '#000080',
        margin: 1,
    },
    deliverImage:{
        flex: 0.65,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
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
  