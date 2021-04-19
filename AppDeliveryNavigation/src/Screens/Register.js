import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
                <View style={styles.container}>
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
                    <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}> ឈ្មោះហាង</TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}> លេខទូរស័ព្ទ</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}> លេខសម្ងាត់</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}> បញ្ចាក់លេខសម្ងាត់</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}> ឈ្មោះគណនីABA</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}> លេខគណនីABA</Text>
                    </View>
                    <View style={styles.btnSignIn}>
                        <Text style={styles.signInTitle}> ចូលគណនី</Text>
                    </View>

                    <TouchableOpacity style={styles.SignInHeader}
                        onPress={() => NavigationService.navigate(NAV_TYPES.MAIN_HOME01)} >
                        <Text style={styles.signIn}>ចូលគណនី</Text>
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
    inner:{
        flex: 0.18,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    benner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
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
        color: '#1E90FF',
    },
    inputBox:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#000080',
        borderWidth: 2,
    },
    inputText:{
        fontSize: 20,
        color: 'grey',
        paddingLeft: 20,
    },
    btnSignIn:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'10%',
        marginRight:'10%',
        margin: 10,
        borderRadius: 50,
        borderColor: '#4682B4',
        backgroundColor:'#4682B4',
        borderWidth: 2,
    },
    signInTitle:{
        fontSize: 20,
        color: 'white',
    },
  });
  