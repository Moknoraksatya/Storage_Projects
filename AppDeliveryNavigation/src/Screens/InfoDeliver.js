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
                        </View>
                    </View>

                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={4}
                        // labels={labels}
                    />
                    
                    <View style={styles.ads}>
                        <View style={styles.bennerAds}>
                            <Text style={styles.adsTitle}>ព័ត៍មាននិង លក្ខណ៍</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.call} >ហៅឥលូវ</Text>
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
    
    ads:{
        flex: 0.3,
        flexDirection: 'row',
        marginBottom: 50,
    },
    bennerAds: {
        flex: 1,
        margin:10,
        marginBottom: 10,
        borderWidth: 3,
        borderColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
    },
    
    adsTitle:{
        fontSize: 25,
        color:'red',
    },
    order:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    footer:{
        flex: 0.1,
        top: 140,
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    call:{
        fontSize: 25,
        color: 'white',
    },
  });
  