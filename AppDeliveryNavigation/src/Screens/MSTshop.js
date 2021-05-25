import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Button,
    Modal,
    ToastAndroid,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'


var hobbies = [
    {label: "ភាសាខ្មែរ", value: "ភាសាខ្មែរ"},
    {label: "English", value: "English"},
    {label: "chinese", value:"chinese"},
  ];
export default class MSTshop extends Component{
   
    constructor(){
        super()
        this.state={
            show:false
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.ContactBox}>
                        <View style={styles.logoBox}>
                        
                            <View style={styles.BoxImage}>
                            {/* <Text>1</Text> */}
                                <Image
                                    style={styles.MSTlogo}
                                    source={require('../Assets/images/logoMST.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.TitleBox}>
                        {/* <Text>1</Text> */}
                            <View style={styles.TitleRow}>
                                <Text style={{fontSize:12,color:'white',fontFamily:'KhmerOScontent',}}>សូមស្វាគមន៏</Text>
                            </View>
                            <View style={styles.TitleRow1}>
                                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>MST Shop</Text>
                            </View>
                            <View style={styles.TitleRow2}>
                                <Text style={{fontSize:12,color:'white',fontFamily:'KhmerOScontent',}}>0965054500</Text>
                            </View>
                        </View>
                    </View>
                    <View flex={0.03}
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MANAGECREDIT)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>គ្រប់គ្រងគណនី</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <SimpleLineIcons style={{fontWeight:'bold'}} name="arrow-right" size={15} color={'#ffffff'}> </SimpleLineIcons>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.CALLHISTORY)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ប្រវត្តិហៅ</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <SimpleLineIcons style={{fontWeight:'bold'}} name="arrow-right" size={15} color={'#ffffff'}> </SimpleLineIcons>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MONEY)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ប្រវត្តិទូទាត់ប្រាក់</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <SimpleLineIcons style={{fontWeight:'bold'}} name="arrow-right" size={15} color={'#ffffff'}> </SimpleLineIcons>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MSTSHOP)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>គោលការណ៏ និង លក្ខខណ្ឌ</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <SimpleLineIcons style={{fontWeight:'bold'}} name="arrow-right" size={15} color={'#ffffff'}> </SimpleLineIcons>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{this.setState({show:true})}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ភាសា</Text>
                            <Modal transparent={true} visible={this.state.show}>
                            <View style={{backgroundColor:'#fffff',flex:1,justifyContent:'center'}}>
                            <View style={{backgroundColor:'#ffffff',margin:30,borderRadius:10,flex:0.3,shadowColor: "#000",shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.37,
                            shadowRadius: 7.49,

                            elevation: 12,}}>
                                <View style={styles.HeaderTitle}>
                                    <Text style={styles.HeaderTitle} style={{fontSize:16,fontFamily:'KhmerOScontent',color:'black',}}>ភាសា</Text>
                                </View>
                                <View style={styles.listRadio}>
                                    <RadioForm
                                        radio_props={hobbies}
                                        // initial={1}
                                        onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}}
                                        buttonSize={10}
                                        buttonOuterSize={23}
                                        selectedButtonColor={'#02475e'}
                                        selectedLabelColor={'#02475e'}
                                        labelStyle={{ fontSize: 20, }}
                                        disabled={false}
                                        formHorizontal={false}
                                        style={{ flex:1,height:100 }}
                                        itemShowKey="label"
                                        itemRealKey="value"
                                        circleSize={16}
                                        initial={0}
                                    />
                                </View>    
                                <TouchableOpacity style={styles.footerBtn} 
                                    onPress={()=>{this.setState({show:false})}}>
                                    <Text style={{fontSize:14,fontFamily:'KhmerOScontent',color:'white'}}>រួចរាល់</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                        </View>
                        <View style={styles.iconBox}>
                            <SimpleLineIcons style={{fontWeight:'bold'}} name="arrow-right" size={15} color={'#ffffff'}> </SimpleLineIcons>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.LOGIN)}}>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ចាកចេញ</Text>
                            <MaterialCommunityIcons style={{marginLeft:30}} name="arrow-right" size={25} color={'#ffffff'}> </MaterialCommunityIcons>
                        </View>
                        <View style={styles.iconBox}>
                            
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
        backgroundColor: '#02475e',
        position:'relative'
    },
    headerTitle:{
        flex: 0.1,
        justifyContent:'center',
        alignItems:'center',
    },
    ContactBox:{
        marginTop:20,
        flex: 0.2,
        flexDirection:'row',
        // marginLeft:30,
        // marginRight:30,
        // backgroundColor:'yellow'
    },
    logoBox:{
        flex: 0.5,
        flexDirection:'column',
        // backgroundColor:'red',
        // boxSixing: "border-box",
        justifyContent:'center',
        alignItems:'flex-end',
        right:"5%",
        // alignItems:'center',
        // borderRadius:15,
        maxWidth: "95%",
        maxHeight:"100%",
    },
    BoxImage:{
        width:'60%',
        height:'85%',
        // marginLeft:40,
        resizeMode:'contain',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    MSTlogo:{
        width:'100%',
        resizeMode:'contain',
    },
    TitleBox:{
        flex: 0.5,
        flexDirection:'column',
        justifyContent:'center',
        left:"5%",
        maxWidth: "95%",
        maxHeight:"100%",
    },
    TitleRow:{
        flex:0.3,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red',
        textAlign:'center'
    },
    TitleRow1:{
        flex:0.4,
        flexDirection:'row',
        alignItems:'center',
    },
    TitleRow2:{
        flex:0.3,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red',
    },
    branch:{
        flex: 0.08,
        flexDirection:'row',
        borderBottomColor:'white',
        borderBottomWidth:1,
    },
    ListTitleBox:{
        flex:0.9,
        flexDirection:'row',
        alignItems:'center',
    },
    iconBox:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    ListTitle:{
       color:"white",
       fontSize:14,
       marginLeft:20,
       fontFamily:'KhmerOScontent',
    },
    HeaderTitle:{
        flex:0.25,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        borderBottomColor:'grey',
        borderBottomWidth:1,
    },
    listRadio:{
        backgroundColor:'#ffffffaa',
        flex:0.5,
        flexDirection:'row',
        color:'white',
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'5%',
        paddingTop:25,
    },
    footerBtn:{
        flex:0.25,
        flexDirection:'row',
        backgroundColor:'#fb3640',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
    },
  });
  