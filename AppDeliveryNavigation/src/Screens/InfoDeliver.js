import StepIndicator from 'react-native-step-indicator';
import React,{Component} from 'react'
import { Text,StyleSheet,Image,View,TouchableOpacity} from 'react-native'
export default class Home extends Component{
   
    render(){

        const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
        const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',// last circle
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',//circle
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013', //line
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
        }

        return(
            <>
                <View style={styles.container}>
                 
                    <View style={styles.ads}>
                        <View style={styles.bennerAds}>
                            <Text style={styles.adsTitle}>ព័ត៌មានពីដំណើរការដឹកជញ្ជូន​</Text>
                            <Text style={styles.adsTitleSub}>ស្ថិតនៅក្នុងការគ្រប់គ្រងរបស់យើងខ្ញុំ</Text>
                            <Text style={styles.adsTitleSub}>យើងខ្ញុំមិនទាន់បានបញ្ចូនទៅអតិថីជន</Text>
                            <Text style={styles.adsTitleSub}>របស់អ្នកនៅឡើយ។</Text>
                        </View>
                    </View>

                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={4}
                        // labels={labels}
                    />
                    <View style={styles.description}>
                        <Text style={styles.noteTitle} >ព័ត៍មានអំពីការដឹកជញ្ចូន{'\n'}<Text style={styles.Title} >សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ ត្រូវតែជាទំនិញវិចខ្ចប់អោយបានស្អាត{'\n'}ព្រោះយើងខ្ញុំមិនទទួលវិចខ្ចប់បន្ថែមឡើយ{'\n'}ប្រសិនបើអ្នកបានផ្ញើទំនិញដែលមានបញ្ហាដែលអាចបាក់បែក សូមវិចខ្ចប់អោយមានសុវត្តិភាព{'\n'}និងធ្វើជាសញ្ញាសម្គាល់អោយយើងខ្ញុំបានដឹងផង ។</Text></Text>
                    </View>
                    <View style={styles.description1}>
                        <Text style={styles.noteTitle} >លក្ខណ៏អំពីការដឹកជញ្ជូន{'\n'}<Text style={styles.Title} >សូមបញ្ជាក់ជូនថារាល់ទំនិញទាំងអស់ដែលលោកអ្នកបានផ្ញើ ក្រុមហ៊ុនយើងខ្ញុំមិនមាន ការឆែកត្រួតពិនិត្យឡើយ ប្រសិនមានការករណីទំនិញរបស់លោកអ្នកជាទំនិញខុសច្បាប់យើងខ្ញុំ និងមិនទទួលខុសត្រូវឡើយ សូមលោកអ្នកទទួលខុសត្រូវចំពោះមុខច្បាប់ដោយខ្លួនុំឯកឯង</Text></Text>
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
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.HOME01)}}>
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
    
    ads:{
        flex: 0.4,
        flexDirection: 'row',
        marginBottom: 50,
    },
    bennerAds: {
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
        fontSize: 25,
        color:'red',
    },
    adsTitleSub:{
        fontSize: 25,
        color:'black',
    },
    order:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    description:{
        flex:0.15,
        flexDirection:'row',
        borderTopColor: 'skyblue',
        borderTopWidth: 1,
        margin: 10,
        marginBottom:0,
    },
    description1:{
        flex:0.15,
        flexDirection:'row',
        margin: 10,
        marginTop: 0,
        marginBottom:0,
    },
    noteTitle:{
        color: 'red',
        fontSize:11,
    },  
    Title:{
        color: 'black',
        fontSize:11,
    },  
    danger:{
        flex:0.13,
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    circle: {
        height: 50,
        width: 50,
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
  