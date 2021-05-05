import React,{Component} from 'react'
import {Text,StyleSheet,Image,View,TouchableOpacity} from 'react-native'


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'
export default class ResultPackage extends Component{
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
                            <Text style={styles.text}> សរុបចំនួន ០៦​ កញ្ចប់</Text>
                            <Text style={styles.textSmall}> 03, មេសា,​ 2021 </Text>  
                        </View>
                    </View>
                        {/* dollar report of package */}
                    <TouchableOpacity style={styles.inner1}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                            >
                        <View style={styles.bennerfirst}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner2}>
                            <Text style={styles.text1}>ទួលគោក - ទួលសង្កែ</Text>
                        </View>  
                        <View style={styles.benner2Price}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.benner2Price}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>       
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - ឈូកមាស</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - ផ្សារដីហុយ</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.notSuccessImage}
                                source={require('../Assets/images/unSuccess.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - ព្រៃកព្នៅ</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - កប់ស្រូវ</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - ច្បារអំពៅ</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                                onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}
                                >
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/Income.jpg')}
                            />
                        </View>
                        <View style={styles.benner3}>
                            <Text style={styles.text1}>ទួលគោក - បឹងត្របែក</Text>
                        </View>
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.bennerPrice}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner1}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.bennerfirst}>
                            <Image
                                style={styles.notSuccessImage}
                                source={require('../Assets/images/unSuccess.jpg')}
                            />
                        </View>
                        <View style={styles.benner2}>
                            <Text style={styles.text1}>ទួលគោក - តាខ្មៅ</Text>
                        </View>  
                        <View style={styles.benner2Price}>
                            <Text style={styles.textPrice}>10$</Text>
                        </View>  
                        <View style={styles.benner2Price}>
                            <Text style={styles.textPrice}>6000៛</Text>
                        </View>       
                    </TouchableOpacity>
                    {/* result */}
                    <View style={styles.inner1}>
                        <View style={styles.image}>
                            
                        </View>
                        <View style={styles.bennerTotal}>
                            <Text style={styles.totalPrice}>បរាជ័យ</Text>
                            <Text style={styles.price} style={{marginLeft: 8,fontSize: 17,color: 'red',}}>20$</Text>
                        </View>
                        <View style={styles.bennerTotalPrice}>
                            <Text style={styles.totalPrice}>តម្លៃសរុប</Text>
                            <Text style={styles.price}>60$</Text>
                        </View>  
                        <View style={styles.bennerTotalPrice}>
                            <Text style={styles.totalPrice}>តម្លៃសេវា</Text>
                            <Text style={styles.price}>48000៛</Text>
                        </View>           
                    </View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },  
    inner:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text:   {
     fontSize: 25,
     color: 'red',
    },
    textPrice:{
        fontSize: 16,
        color: 'red',},
    inner1:{
        flex: 0.08,
        flexDirection: 'row',
        borderColor: '#dedbd3',
        borderTopWidth: 1,
    },
    bennerfirst: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image1: {
        flex: 0.16,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    benner2: {
        flex: 0.44,
        justifyContent: 'center',
    },
    benner2Price: {
        flex: 0.18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    benner3: {
        flex: 0.44,
        justifyContent: 'center',
    },
    bennerTotal: {
        flex: 0.44,
        justifyContent: 'center',
    },
    bennerPrice: {
        flex: 0.18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bennerTotalPrice: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 25,
        color: 'red',
    },
    text1:{
        fontSize: 17,
        color: '#4349f7',
    },
    totalPrice:{
        fontSize: 17,
        color: '#4349f7',
    },
    price:{
        fontSize: 17,
        color: 'red',
    },
    centerLogo: {
        flex: 1,
        width: 100,
        height: 100,
    },
    SuccessImage: {
        width: 35,
        height: 35,
    },
    notSuccessImage: {
        width: 30,
        height: 30,
        marginLeft: 15,
    },
  });
  