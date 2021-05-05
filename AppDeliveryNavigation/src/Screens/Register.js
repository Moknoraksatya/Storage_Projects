import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    RadioButtonRN
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome';


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class SignIn extends Component{
   
    constructor(prop){
        super(prop)
        this.state={radioResuil:null} 
    }
    renderRadioButton(){
        const radios=[
            {titile:"",value:"A"},
        ];
        var rs=[];
        radios.map((one,i)=>{
            rs.push(
                <TouchableOpacity key={i} onPress={()=>{this.setState({radioResuil:one['value']})}}>
                    {
                        one && one.value===this.state.radioResuil?
                        <View>
                            <MaterialCommunityIcons name="check-circle-outline" size={25} color={'#3d84b8'}><Text style={{color:'#3d84b8', fontSize:16}}>{one['titile']}</Text></MaterialCommunityIcons>
                            {/* <Text style={{color:'red'}}>{one['titile']}</Text> */}
                        </View>:
                        <View>
                            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={25} color={'#3d84b8'}><Text style={{color:'#3d84b8', fontSize:16}}>{one['titile']}</Text> </MaterialCommunityIcons>    
                        </View>
                    }
                </TouchableOpacity>
            )
        })
        return rs
    }
    render(){
        return(
            <>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.inner}>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>     
                    </View>
                    <View style={styles.SignInHeader}>
                        <Text style={styles.signIn}>ចុះឈ្មោះគណនី</Text>
                    </View>
                    
                    <TextInput style={styles.inputBox} placeholder="ឈ្មោះហាង ឬ ឈ្មោះហ្វេសប៊ុកផេក"></TextInput>
                    
                        <TextInput style={styles.inputBox} placeholder="លេខទូរស័ព្ទ"></TextInput>
                    
                    
                        <TextInput style={styles.inputBox} placeholder="លេខសម្ងាត់"></TextInput>
                    
                    
                        <TextInput style={styles.inputBox} placeholder="បញ្ចាក់លេខសម្ងាត់"></TextInput>
                    
                    
                        <TextInput style={styles.inputBox} placeholder="ឈ្មោះគណនី​​ធនាគា"></TextInput>
                    
                    
                        <TextInput style={styles.inputBox} placeholder="លេខគណនី​​ធនាគា"></TextInput>
                    

                    <View style={styles.tick}>
                        {this.renderRadioButton()}
                        <Text style={{color:'#3d84b8', fontSize:17}}>បើសិនអ្នកមិនមានគណនីធនាគាសូមចុចសញ្ញានេះ</Text>
                    </View>

                    <TouchableOpacity style={styles.btnSignIn}
                        onPress={() => NavigationService.navigate(NAV_TYPES.VERIFYCODE)} >
                        <Text style={styles.signInTitle}> ចូលបន្ទាប់</Text>
                    </TouchableOpacity>
                    
                    {/* <TouchableOpacity style={styles.SignInHeader}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                        <Text style={styles.signIn}>ចូលគណនី</Text>
                    </TouchableOpacity> */}
                    
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerLogo: {
        flex: 1,
        width: 150,
        height: 100,
    },
    SignInHeader:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn:{
        fontSize: 20,
        color: '#344fa1',
    },
    inputBox:{
        flex: 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        paddingLeft:15,
        height: 45,
        margin: 10,
        borderWidth: 1,   
    },

    btnSignIn:{
        flex: 0.5,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
        fontSize: 20,
        padding: 7,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#000080',
    },
    signInTitle:{
        fontSize: 16,
        color: 'white',
    },
    tick:{
        flex: 0.1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10,
    },
  });
  