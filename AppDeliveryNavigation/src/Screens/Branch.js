import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'
export default class Branch extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.headerTitle}>
                        <Text style={{fontSize:22, color:'white',fontFamily:'KhmerOScontent',}}>ទំនាក់ទំនងក្រុមហ៊ុន</Text>
                    </View>
                    <View style={styles.ContactBox}>
                        <View style={styles.PhoneBox} >
                            <View style={styles.iconBox}>
                                {/* <Text>1</Text> */}
                                <MaterialIcons style={styles.call} name="phone-in-talk"> </MaterialIcons>
                            </View>
                        </View>
                        <View style={styles.MessageBox}  >
                            <View style={styles.iconBox1}>
                                {/* <Text>1</Text> */}
                                <Fontisto style={styles.messeger} name="messenger"> </Fontisto>
                            </View>
                        </View>
                    </View>
                    <View flex={0.05}
                        style={{
                            borderBottomColor: '#02475e',
                            borderBottomWidth: 3, Top:0,
                            backgroundColor:'#02475e',
                        }}
                    />
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
    headerTitle:{
        flex: 0.1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#02475e',
    },
    ContactBox:{
        flex: 0.2,
        flexDirection:'row',
        backgroundColor:'#02475e',
    },
    PhoneBox:{
        flex:0.5,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#02475e',
        // margin:10,
    },
    MessageBox:{
        flex:0.5,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green',
        // margin:10,
    },
    iconBox:{
        width:'60%',
        height:'80%',
        // maxHeight:'80%',
        // maxWidth:'57%',
        resizeMode:'contain',
        backgroundColor:'white',
        marginLeft:55,
        borderRadius:15,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
    },
    iconBox1:{
        width:'60%',
        height:'80%',
        // maxHeight:'80%',
        // maxWidth:'57%',
        resizeMode:'contain',
        backgroundColor:'white',
        marginRight:55,
        borderRadius:15,
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center',
    },
    // contactImage:{
    //     width:80,
    //     height:80,
    // },
    call:{
        marginLeft:14,
        fontSize: 65,
        color:'#02475e',
        alignSelf:'center',
    },
    messeger:{
        marginLeft:25,
        fontSize: 57,
        color:'#02475e',
        alignSelf:'center',
    },
  });
  