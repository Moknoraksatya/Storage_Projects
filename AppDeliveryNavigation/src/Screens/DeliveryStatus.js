import StepIndicator from 'react-native-step-indicator';
import React,{Component} from 'react'
import { Text,StyleSheet,Image,View,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'




const statusType = [
    {
      text:'',
      number: 1,
      color:'#fb3640'
    },
    {
      text:'BBBB',
      number: 2,
      color:'blue'
    },
    {
      text:'CCCC',
      number: 3,
      color:'orange'
    },
    {
      text:'DDDD',
      number: 4,
      color:'green'
    }
  ]
export default class Home extends Component{
    constructor(prop){
        super(prop)
        this.state={
        
        } 
    }
    render(){

        const labels = ["Cart","Delivery Address","Order Summary","Payment Method"];
        const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: '#fe7013',// last circle
        // stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',//circle
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: 'blue', //line
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fb3640',
        // stepIndicatorUnFinishedColor: '#ffffff',
        // stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        // stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
        }

        return(
            <>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFO)}}>
                                <MaterialIcons
                                    style={{color:'#005792',marginRight:'-12%',fontSize:33}} name="keyboard-arrow-left" size={15} color={'#ffffff'}> 
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.benner}>
                        <Text style={styles.adsTitle}>ព័ត៌មានពីដំណើរការដឹកជញ្ជូន</Text>
                        </View>    
                        <View style={styles.btnBack}>

                        </View>
                    </View>
                    <View style={styles.status}>
                        <View style={styles.bennerStatus} >
                            <Text style={styles.adsTitleSub}>{statusType[0].text}ស្ថិតនៅក្នុងការគ្រប់គ្រងរបស់យើងខ្ញុំ</Text>
                            <Text style={styles.adsTitleSub}>{statusType[0].text}យើងខ្ញុំមិនទាន់បានបញ្ចូនទៅអតិថីជន</Text>
                            <Text style={styles.adsTitleSub}>{statusType[0].text}របស់អ្នកនៅឡើយ។</Text>
                            
                            {/* <Text style={styles.adsTitle}>ព័ត៌មានពីដំណើរការដឹកជញ្ជូន​</Text>
                            <Text style={styles.adsTitleSub}>ស្ថិតនៅក្នុងការគ្រប់គ្រងរបស់យើងខ្ញុំ</Text> 
                            <Text style={styles.adsTitleSub}>យើងខ្ញុំមិនទាន់បានបញ្ចូនទៅអតិថីជន</Text>
                            <Text style={styles.adsTitleSub}>របស់អ្នកនៅឡើយ។</Text> */}
                        </View>
                    </View>

                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={3}
                        // labels={labels}
                    />
                    <View
                        style={{
                            borderBottomColor: 'skyblue',
                            borderBottomWidth: 1, margin:10,
                        }}
                    />
                    {/* <View style={styles.description}> */}
                        <Text style={styles.noteTitle} >ព័ត៍មានអំពីការដឹកជញ្ចូន{'\n'}<FontAwesome  name="circle" size={7} color={'#005792'}> </FontAwesome><Text style={styles.Title} >
                            សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ 
                            ត្រូវតែជាទំនិញវិចខ្ចប់អោយបានស្អាតព្រោះយើងខ្ញុំមិនទទួលវិចខ្ចប់បន្ថែមឡើយប្រសិនបើអ្នកបានផ្ញើទំនិញដែលមានបញ្ហាដែលអាចបាក់បែក 
                            សូមវិចខ្ចប់អោយមានសុវត្តិភាពនិងធ្វើជាសញ្ញាសម្គាល់អោយយើងខ្ញុំបានដឹងផង ។</Text>
                        </Text>
                    {/* </View> */}
                    {/* <View style={styles.description1}> */}
                        <Text style={styles.noteTitle} >លក្ខណ៏អំពីការដឹកជញ្ជូន{'\n'}<FontAwesome name="circle" size={7} color={'#005792'}> </FontAwesome><Text style={styles.Title} >សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ ក្រុមហ៊ុនយើងខ្ញុំមិនមាន ការឆែកត្រួតពិនិត្យឡើយ ប្រសិនមានការករណីទំនិញរបស់លោកអ្នកជាទំនិញខុសច្បាប់យើងខ្ញុំ និងមិនទទួលខុសត្រូវឡើយ សូមលោកអ្នកទទួលខុសត្រូវចំពោះមុខច្បាប់ដោយខ្លួនុំឯកឯង</Text></Text>
                    {/* </View> */}
                    
                    <View style={styles.danger}>
                        <View style={styles.circle}>
                        
                        </View>
                        <View style={styles.circle}>
                        
                        </View>
                        <View style={styles.circle}>
                        
                        </View>
                        <View style={styles.circle}>
                        
                        </View>
                    </View>
                    <TouchableOpacity style={styles.footer}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.MAIN_HOME01)}}>
                        <Text style={styles.callDeliver} >ខលទៅអ្នកដឹក</Text>
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
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    btnBack:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',
    },
    benner: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        // backgroundColor:'yellow'
    },
    status:{
        flex: 0.4,
        flexDirection: 'row',
        marginBottom: 30,
    },
    bennerStatus: {
        flex: 1,
        margin:10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor:'#005792',
        justifyContent:'center',
        alignItems:'center',
        marginTop:0,
        // backgroundColor:'yellow',
        // borderRadius:5,
    },
    
    adsTitle:{
        fontSize: 20,
        color:'red',
        fontFamily:'KhmerOScontent',
    },
    adsTitleSub:{
        fontSize: 18,
        color:'black',
        fontFamily:'KhmerOScontent',
    },
    order:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    description:{
        flex:0.23,
        flexDirection:'row',
        borderTopColor: 'black',
        borderTopWidth: 1,
        margin: 10,
        marginBottom:0,
        paddingTop: 10,
        backgroundColor:'yellow',
    },
    description1:{
        flex:0.16,
        flexDirection:'row',
        margin: 10,
        marginTop: 0,
        marginBottom:0,
        // backgroundColor:'yellow',
    },
    noteTitle:{
        color: 'red',
        fontSize:10,
        lineHeight: 20,
        marginLeft:10,
        marginRight:10,
        fontFamily:'KhmerOScontent',
    },  
    Title:{
        color: '#005792',
        fontSize:10,
        lineHeight: 18,
    },  
    danger:{
        flex:0.1,
        flexDirection:'row',
        // backgroundColor:'#fb3640',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%'
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth:1,
        borderColor:'#005792',
        margin: 10,
    },
    footer:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#005792',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    callDeliver:{
        fontSize: 18,
        color: 'white',
        fontFamily:'KhmerOScontent',
    },
  });
  