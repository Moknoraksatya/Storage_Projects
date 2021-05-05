import StepIndicator from 'react-native-step-indicator';
import React,{Component} from 'react'
import { Text,StyleSheet,Image,View,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import { color } from 'react-native-reanimated'




const statusType = [
    {
      text:'',
      number: 1,
      color:'red'
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
        stepIndicatorFinishedColor: 'red',
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
                
                    <View style={styles.status}>
                        <View style={styles.bennerStatus} >
                            <Text style={styles.adsTitle}>{statusType[0].text}ព័ត៌មានពីដំណើរការដឹកជញ្ជូន</Text>
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
                    <View style={styles.description}>
                        <Text style={styles.noteTitle} >ព័ត៍មានអំពីការដឹកជញ្ចូន{'\n'}<FontAwesome style={styles.tinyLogo} name="circle" size={7} color={'#3074e3'}> </FontAwesome><Text style={styles.Title} >សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ ត្រូវតែជាទំនិញវិចខ្ចប់អោយបានស្អាត{'\n'}ព្រោះយើងខ្ញុំមិនទទួលវិចខ្ចប់បន្ថែមឡើយ{'\n'}ប្រសិនបើអ្នកបានផ្ញើទំនិញដែលមានបញ្ហាដែលអាចបាក់បែក សូមវិចខ្ចប់អោយមានសុវត្តិភាព{'\n'}និងធ្វើជាសញ្ញាសម្គាល់អោយយើងខ្ញុំបានដឹងផង ។</Text></Text>
                    </View>
                    <View style={styles.description1}>
                        <Text style={styles.noteTitle} >លក្ខណ៏អំពីការដឹកជញ្ជូន{'\n'}<FontAwesome style={styles.tinyLogo} name="circle" size={7} color={'#3074e3'}> </FontAwesome><Text style={styles.Title} >សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ ក្រុមហ៊ុនយើងខ្ញុំមិនមាន ការឆែកត្រួតពិនិត្យឡើយ ប្រសិនមានការករណីទំនិញរបស់លោកអ្នកជាទំនិញខុសច្បាប់យើងខ្ញុំ និងមិនទទួលខុសត្រូវឡើយ សូមលោកអ្នកទទួលខុសត្រូវចំពោះមុខច្បាប់ដោយខ្លួនុំឯកឯង</Text></Text>
                    </View>
                    
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
    status:{
        flex: 0.3,
        flexDirection: 'row',
        marginBottom: 30,
    },
    bennerStatus: {
        flex: 1,
        margin:10,
        marginBottom: 10,
        borderWidth: 3,
        borderColor:'#000080',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow',
        borderRadius:5,
    },
    
    adsTitle:{
        fontSize: 20,
        color:'red',
    },
    adsTitleSub:{
        fontSize: 20,
        color:'black',
    },
    order:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    description:{
        flex:0.19,
        flexDirection:'row',
        borderTopColor: 'skyblue',
        borderTopWidth: 1,
        margin: 10,
        marginBottom:0,
        paddingTop: 10,
        // backgroundColor:'yellow',
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
        fontSize:11,
        lineHeight: 20,
    },  
    Title:{
        color: '#3074e3',
        fontSize:11,
        lineHeight: 17,
    },  
    danger:{
        flex:0.1,
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth:1,
        borderColor:'skyblue',
        margin: 10,
    },
    footer:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    callDeliver:{
        fontSize: 20,
        color: 'white',
    },
  });
  