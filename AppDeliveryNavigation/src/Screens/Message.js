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
import Ionicons from 'react-native-vector-icons/Ionicons'


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Message extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.CircleTick}>
                        <View style={styles.Tick}>
                            <Ionicons style={styles.Tickicon} name="ios-checkmark-sharp" > </Ionicons>
                        </View>
                    </View>
                    <View style={styles.MessageBox}>
                       <Text style={styles.MeassageTitle}>
                            ការហៅរបស់លោកអ្នក
                            ទទួលបានជោគជ័យហើយ។
                            សូមរងចាំការទាក់ទងពីខាង
                            បុគ្គលិកយើងខ្ញុំ សូមអរគុណ!
                       </Text>
                    </View>
                    <View style={styles.successMessage}>
                       <Text style={styles.Title}>
                            រួចរាល់
                       </Text>
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
    CircleTick:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 30,
    },
    Tick:{
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: '#32CD32',
        justifyContent:'center',
        alignItems: 'center',
    },
    Tickicon:{
        fontSize: 70,
        color: 'white',
        paddingLeft: 25,
    },
    MessageBox:{
        flex: 0.4,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    MeassageTitle:{
        fontSize: 38,
        color: 'black',
        textAlign: 'center'
    },
    successMessage:{
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: '#32CD32',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '15%',
        marginLeft: '30%',
        marginRight: '30%',
    },
    Title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:  'white'
    },
  });
  