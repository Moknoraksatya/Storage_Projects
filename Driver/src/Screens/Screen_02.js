import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'

import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Screen_02 extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        } 
    }
    render(){
        return(
            <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>ទិន្ន័យហាងសរុប</Text>   
                </View>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner2}>
                            <Text style={styles.text}>ហាង​ ក</Text>
                        </View>   
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner3}>
                            <Text style={styles.text}>ហាង​ ខ</Text>
                        </View>     
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner3}>
                            <Text style={styles.text}>ហាង​ គ</Text>
                        </View>     
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.REPORT)}}
                            >
                        <View style={styles.benner3}>
                            <Text style={styles.text}>ហាង​ ឃ</Text>
                        </View>     
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
    header:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    headerTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'#000080',
    },
    btn: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: 'green',
        marginLeft: 10,
        marginRight: 10,
    },
    
   
    benner2: {
        flex: 1,
        borderColor: '#000080',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    benner3: {
        flex: 1,
        borderColor: '#000080',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 25,
        color: '#000080',
    },

 
  });
  