import React,{Component} from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View
} from 'react-native'
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
                <View style={styles.benner}>
                    <Text>Home</Text>
                    <TouchableOpacity
                       onPress={() => NavigationService.navigate(NAV_TYPES.MAP)} 
                    >
                        <Text>Go to map</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    benner:{
        flex:1,
    }
})