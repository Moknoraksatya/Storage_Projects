

























import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Dimensions
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = (ASPECT_RATIO * LATITUDE_DELTA);
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
    render(){
        return(
            <>
                <View style={styles.benner}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 11.566025,
                        longitude: 104.891662,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                        }}
                    />
                    <TouchableOpacity
                        style={styles.back}
                       onPress={() => NavigationService.goBack()} 
                    >
                        <Text style={{color:'#fff'}}>Back</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    benner:{
        flex:1,
        position:'relative',
    },
    map:{
        flex:1
    },
    back:{
        position:'absolute',
        bottom:0,
        width:'100%',
        padding:20,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    }
})