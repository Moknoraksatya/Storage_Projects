import React,{Component} from 'react'
import {
    View, ActivityIndicator, StyleSheet
} from 'react-native'
import NavigationService from "../Service/navigationService";
import { NAV_TYPES } from "../Navigation/navTypes";
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
    componentDidMount(){
        setTimeout(() => {
            NavigationService.navigate(NAV_TYPES.LOGIN)
        }, 2000);
    }
    render(){
        return(
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})