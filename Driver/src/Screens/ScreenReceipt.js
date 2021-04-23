import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class SignIn extends Component{
   
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){
        return(
            <>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.inner}>
                        <View style={styles.benner}>
                            <View style={styles.btnBack}>
                            <TouchableOpacity style={styles.back}
                                onPress={() => NavigationService.goBack()} >
                                    <View style={styles.tinyLogo}>
                                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color={'black'}> </MaterialIcons>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}> ទទួលអីវ់់ាន់</Text>
                        </View>
                        </View>     
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> ឈ្មោះហាង</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> លេខអ្នកផ្ញើ</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> លេខអ្នកទទួល</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> ប្រភេទអីវ៉ាន់</TextInput>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> តម្លៃអីវ៉ាន់</TextInput>
                    </View>

                    <View style={styles.smallInput}>
                        <View style={styles.smallBox}>
                            <TextInput style={styles.smallInputBox}> មិនទាន់ទូទាត់</TextInput>
                        </View>
                        <View style={styles.smallBox}>
                            <TextInput style={styles.smallInputBox2}> ទូទាត់រួច</TextInput>
                        </View>
                    </View>
                    <View style={styles.inputBox1}>
                        <TextInput style={styles.inputBox}> តម្លៃសេវាដឹក</TextInput>
                    </View>
                    <View style={styles.smallInput}>
                        <View style={styles.smallBox}>
                            <TextInput style={styles.smallInputBox}> ភ្ញៀវ / ហាង</TextInput>
                        </View>
                        <View style={styles.smallBox}>
                            <TextInput style={styles.smallInputBox2}> ទូទាត់រួច​ /</TextInput>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.footer}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MESSAGE)}}>
                        <Text style={styles.call} >រួចរាល់</Text>
                    </TouchableOpacity>
                </ScrollView>
                </KeyboardAvoidingView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    inner:{
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        flexDirection: 'row',
        height:50,
    },
    btnBack: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems:'center'
    },
    header: {
        flex: 0.85,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        marginLeft: 80,
    },
    inputBox:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        margin: 10,
        borderRadius: 10,
        borderColor: '#000080',
        borderWidth: 1,
        padding: 10,
        height: 50,
        color: 'grey',
        fontSize: 20,
    },
    smallInput:{
        flex: 0.1,
        flexDirection: 'row',
        margin: 10,
        marginTop: 5,
    },
    smallBox:{
        flex: 0.5,
        flexDirection: 'row',
        height: 50,
    },
    smallInputBox:{
        flex: 1,
        flexDirection: 'row',
        marginRight: 30,
        borderRadius: 10,
        borderColor: '#000080',
        borderWidth: 1,
        color: 'grey',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
    },
    smallInputBox2:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 30,
        borderRadius: 10,
        borderColor: '#000080',
        borderWidth: 1,
        color: 'grey',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 45,
    },
    footer:{
        flex: 0.1,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    call:{
        fontSize: 20,
        color: 'white',
    },
  });
  