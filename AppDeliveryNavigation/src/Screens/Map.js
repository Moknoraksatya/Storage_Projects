import React,{Component} from 'react'
import {
    Text,
    Alert,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import MapView from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
                    <View style={styles.mapBox}>
                        <MapView style={styles.map}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
                        />
                        {/* <Image
                            style={styles.mapImage}
                            source={require('../Assets/images/apple-maps-feature-image.jpg')}
                        /> */}
                        <View style={styles.btnBack}>
                            <TouchableOpacity style={styles.back}
                                onPress={() => NavigationService.goBack()} >
                                    <View style={styles.tinyLogo}>
                                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color={'black'}> </MaterialIcons>
                                    </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputProTitle}>
                        <Text style={styles.proTitle}>សូមបញ្ចូលចំនួនអីវ៉ាន</Text>
                    </View>
                    <View style={styles.TotalPackage}>
                        <Text style={styles.packageTitle} >សូមបញ្ចូលចំនួនកញ្ចប់សរុប</Text>
                    </View>
                    <TouchableOpacity style={styles.footer}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MESSAGE)}}>
                        <Text style={styles.call} >រួចរាល់</Text>
                    </TouchableOpacity>
                   
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
    map:{
        width: '100%',
        height: '100%',
    },
    icon:{
        marginLeft: 4,
    },
    inner:{
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    benner: {
        flex: 0.30,
    },
    benner1: {
        
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    circle:{
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: 'darkgreen',
        alignItems: 'center',
        justifyContent : 'center',
    },
    tinyLogo:{
        width: 25,
        height: 25,
        marginTop: 15,
        marginLeft: 10,
    },
    logo: {
        width: 20,
        height: 20,
    },
   
    mapBox:{
        flex: 0.7,
        flexDirection: 'row',
        // borderWidth:2,
        // borderColor: 'red',
        position: 'relative',
    },
    btnBack:{
        flex: 0.15,
        flexDirection: 'row',
        position: 'absolute',
    },
    mapImage:{
        width: 350,
        height: 365,
    },
    inputProTitle:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    proTitle:{
        fontSize: 27,
        color:'black',
    },
    PackageBox: {
        flex: 0.40,
        margin:10,
        marginBottom: 0,
        justifyContent:'center',
        alignItems:'center',
    },
    package: {
        flex: 0.60,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 0,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor:'skyblue',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    packageTitle:{
        fontSize: 23,
        color:'grey',
    },
    TotalPackage:{
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: '#F8F8FF',
        borderColor: '#C0C0C0',
        borderWidth: 3,
        borderRadius: 10,
        margin: 20,
        marginTop: 2,
        alignItems: 'center',
        justifyContent : 'center',
    },

    footer:{
        flex: 1,
        width: '100%',
        height: '10%',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: '#000080',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    call:{
        fontSize: 25,
        color: 'white',
    },
  });
  