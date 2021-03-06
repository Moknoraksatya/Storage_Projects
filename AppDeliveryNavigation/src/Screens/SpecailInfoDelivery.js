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
                    {/* <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Text style={styles.text} fontFamily={'KhmerOScontent'}> ព័ត៍មានលម្អិតពីការដឹក​​ </Text>
                        </View>
                    </View> */}
                    <View style={styles.inner}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={() => NavigationService.goBack()}>
                                <MaterialIcons
                                    style={{color:'black',marginRight:'-12%',fontSize:33}} name="keyboard-arrow-left"> 
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.benner}>
                            <Text style={styles.text} fontFamily={'KhmerOScontent'}> ព័ត៍មានលម្អិតពីការដឹក​​ </Text>
                        </View>    
                        <View style={styles.btnBack}>

                        </View>
                    </View>
                    <View style={styles.row} >
                       <View style={styles.col1} >
                            <Text style={styles.titleDetail}>លេខកូដទំនិញ</Text>
                       </View>
                       <View style={styles.col2}>
                       <Text style={styles.titleDetail}>៖​ #123456</Text>
                       </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail}>កាលបរិច្ឆេទ</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail}>៖ ០៥ មេសា ២០២១</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ប្រភេទទំនិញ</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ សៀវភៅ</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ពីហាង</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ MST Shop</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >លេខអ្នកផ្ញើ</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 086995253</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >ទីតាំងទទួល</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ ទួលគោក</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >លេខអ្នកទទួល</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 0979888048</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail}>អ្នកដឹកឈ្មោះ</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ វេងសេង</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >លេខអ្នកដឹក</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail}>៖ 0975523392</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >តម្លៃទំនិញ</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 10$</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >តម្លៃសេវា</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 6000៛</Text>
                        </View>
                    </View>
                    <View style={styles.row} >
                        <View style={styles.col1} >
                            <Text style={styles.titleDetail} >តម្លៃសរុប</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.titleDetail} >៖ 11.5$</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.ready}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                        <Text style={styles.Title}>រួចរាល់</Text>
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
        position:'relative'
    },
    inner:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    benner: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    btnBack:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',
    },
    text:   {
     fontSize: 20,
     color: 'black',
     fontFamily:'KhmerOScontent',
    },
    row:{
        flex: 0.05,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    col1:{
        flex: 0.35,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    col2:{
        flex: 0.65,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleDetail:{
        fontSize: 16,
        fontFamily:'KhmerOScontent',
        color:'black'
    },
    ready:{
        width:'100%',
        height:50,
        flexDirection: 'row',
        backgroundColor: '#005792',
        justifyContent:'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
    },
    Title:{
        fontSize: 18,
        color:  'white',
        fontFamily:'KhmerOScontent',
    },
    
  });
  