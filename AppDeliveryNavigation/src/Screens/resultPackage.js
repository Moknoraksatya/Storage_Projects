import React,{Component} from 'react'
import {Text,StyleSheet,Image,View,} from 'react-native'

export default class ResultPackage extends Component{
   
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
                <View style={styles.inner1}>
                    <View style={styles.bennerfirst}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/report.png')}
                        />
                    </View>
                    <View style={styles.benner2}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>  
                    <View style={styles.benner2Price}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.benner2Price}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>       
                </View>
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/report.png')}
                        />
                    </View>
                    <View style={styles.benner3}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>           
                </View>
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/report.png')}
                        />
                    </View>
                    <View style={styles.benner3}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>           
                </View>
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/report.png')}
                        />
                    </View>
                    <View style={styles.benner3}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>           
                </View>
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/out.png')}
                        />
                    </View>
                    <View style={styles.benner3}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>           
                </View>
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        <Image
                            style={styles.data}
                            source={require('../Assets/images/out.png')}
                        />
                    </View>
                    <View style={styles.benner3}>
                        <Text style={styles.text1}>បបញ្ជី នូវ​ថ្ងៃ 02, មេសា,​ 2021</Text>
                    </View>
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>20$</Text>
                    </View>  
                    <View style={styles.bennerPrice}>
                        <Text style={styles.textPrice}>80000៛</Text>
                    </View>           
                </View>
                {/* result */}
                <View style={styles.inner1}>
                    <View style={styles.image}>
                        
                    </View>
                    <View style={styles.bennerTotal}>
                        <Text style={styles.totalPrice}>បញ្ជីសរុប</Text>
                        <Text style={styles.price}>55$</Text>
                    </View>
                    <View style={styles.bennerTotalPrice}>
                        <Text style={styles.text1}>សរុប</Text>
                        <Text style={styles.price}>85$</Text>
                    </View>  
                    <View style={styles.bennerTotalPrice}>
                        <Text style={styles.text1}>សរុប</Text>
                        <Text style={styles.price}>32000៛</Text>
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
        backgroundColor: 'white'
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
        fontSize: 15,
        color: 'red',},
    inner1:{
        flex: 0.1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    bennerfirst: {
        flex: 0.30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    benner2: {
        flex: 0.40,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    benner2Price: {
        flex: 0.15,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    benner3: {
        flex: 0.40,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    bennerTotal: {
        flex: 0.40,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginLeft: 13,
    },
    bennerPrice: {
        flex: 0.15,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    bennerTotalPrice: {
        flex: 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 25,
        color: 'red',
    },
    text1:{
        fontSize: 13,
        color: 'skyblue',
    },
    totalPrice:{
        fontSize: 13,
        color: 'skyblue',
    },
    price:{
        fontSize: 14,
        color: 'red',
    },
    centerLogo: {
        flex: 1,
        width: 100,
        height: 100,
    },
    data: {
        flex: 1,
        width: 50,
        height: 50,
    },
  });
  