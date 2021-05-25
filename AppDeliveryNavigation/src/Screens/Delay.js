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
export default class Delay extends Component{
   
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
                        <Text style={{fontSize:22, color:'#02475e',fontFamily:'KhmerOScontent',paddingTop:10}}>ឥវ៉ាន់ពន្យាពេលទទួល</Text>
                        <Text style={{fontSize:14, color:'#02475e',fontFamily:'KhmerOScontent',}}>០៦​ , ឧសភា , ២០២១</Text>
                    </View>
                    
                    <View flex={0.03}
                        style={{
                            borderBottomColor: '#02475e',
                            borderBottomWidth: 1, Top:50,
                        }}
                    />
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/delay-Clock.jpg')}
                            />
                        </View>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ​ - ទួលគោក</Text>
                        </View>
                        <View style={styles.dateBox}>
                        <Text style={styles.Date}>០៧ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/delay-Clock.jpg')}
                            />
                        </View>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ​ - ទួលគោក</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>០៨​ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/delay-Clock.jpg')}
                            />
                        </View>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ​ - ទួលគោក</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>១០ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/delay-Clock.jpg')}
                            />
                        </View>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ​ - ទួលគោក</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>១២ , ឧសភា , ២០២១</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.branch}
                        onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
                        <View style={styles.image}>
                            <Image
                                style={styles.SuccessImage}
                                source={require('../Assets/images/delay-Clock.jpg')}
                            />
                        </View>
                        <View style={styles.ListTitleBox}>
                            <Text style={styles.ListTitle}>ទួលសង្កែ​ - ទួលគោក</Text>
                        </View>
                        <View style={styles.dateBox}>
                            <Text style={styles.Date}>១៥ , ឧសភា , ២០២១</Text>
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
        backgroundColor: 'white',
    },
    headerTitle:{
        flex: 0.1,
        justifyContent:'center',
        alignItems:'center',
    },
    branch:{
        flex: 0.06,
        flexDirection:'row',
        borderBottomColor:'#02475e',
        borderBottomWidth:1,
    },
    image: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SuccessImage: {
        width: 35,
        height: 35,
    },
    ListTitleBox:{
        flex:0.45,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    dateBox:{
        flex:0.4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingEnd:10,
        // backgroundColor:'yellow'
    },
    ListTitle:{
       color:"#02475e",
       fontSize:14,
       fontFamily:'KhmerOScontent',
    },
    Date:{
        color:"#02475e",
        fontSize:12,
        fontFamily:'KhmerOScontent',
     },
  });
  















// import React,{Component} from 'react'
// import {
//     Text,
//     StyleSheet,
//     Image,
//     View,
//     TouchableOpacity,
// } from 'react-native'
// import Fontisto from 'react-native-vector-icons/Fontisto'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



// import NavigationService from '../Service/navigationService'
// import { NAV_TYPES } from '../Navigation/navTypes'
// import { color } from 'react-native-reanimated'
// export default class Delay extends Component{
   
//     constructor(prop){
//         super(prop)
//         this.state={
        
//         } 
//     }
//     render(){
//         return(
//             <>
//                 <View style={styles.container}>
//                     <View style={styles.headerTitle}>
//                         <Text style={{fontSize:22, color:'white',fontFamily:'KhmerOScontent',paddingTop:10}}>ឥវ៉ាន់ពន្យាពេលទទួល</Text>
//                         <Text style={{fontSize:14, color:'white',fontFamily:'KhmerOScontent',}}>០៨​ , ឧសភា , ២០២១</Text>
//                     </View>
                    
//                     <View flex={0.03}
//                         style={{
//                             borderBottomColor: 'white',
//                             borderBottomWidth: 1, Top:50,
//                         }}
//                     />
//                     <TouchableOpacity style={styles.branch}
//                         onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
//                         <View style={styles.image}>
//                             <Image
//                                 style={styles.SuccessImage}
//                                 source={require('../Assets/images/timer.png')}
//                             />
//                         </View>
//                         <View style={styles.ListTitleBox}>
//                             <Text style={styles.ListTitle}>មាសសុធា</Text>
//                         </View>
//                         <View style={styles.dateBox}>
//                         <Text style={styles.Date}>០៨​ , ឧសភា , ២០២១</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.branch}
//                         onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
//                         <View style={styles.image}>
//                             <Image
//                                 style={styles.SuccessImage}
//                                 source={require('../Assets/images/timer.png')}
//                             />
//                         </View>
//                         <View style={styles.ListTitleBox}>
//                             <Text style={styles.ListTitle}>ពេជ្រ សូវណ្ណច័ន្ទឧត្តម</Text>
//                         </View>
//                         <View style={styles.dateBox}>
//                             <Text style={styles.Date}>០៩​ , ឧសភា , ២០២១</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.branch}
//                         onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
//                         <View style={styles.image}>
//                             <Image
//                                 style={styles.SuccessImage}
//                                 source={require('../Assets/images/timer.png')}
//                             />
//                         </View>
//                         <View style={styles.ListTitleBox}>
//                             <Text style={styles.ListTitle}>វណ្ណ ក្លូរ</Text>
//                         </View>
//                         <View style={styles.dateBox}>
//                             <Text style={styles.Date}>១០ , ឧសភា , ២០២១</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.branch}
//                         onPress={()=>{NavigationService.navigate(NAV_TYPES.SPECAILINFODELIVERY)}}>
//                         <View style={styles.image}>
//                             <Image
//                                 style={styles.SuccessImage}
//                                 source={require('../Assets/images/timer.png')}
//                             />
//                         </View>
//                         <View style={styles.ListTitleBox}>
//                             <Text style={styles.ListTitle}>វណ្ណ កច់</Text>
//                         </View>
//                         <View style={styles.dateBox}>
//                             <Text style={styles.Date}>១១ , ឧសភា , ២០២១</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#02475e',
//         position:'relative'
//     },
//     headerTitle:{
//         flex: 0.1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     branch:{
//         flex: 0.08,
//         flexDirection:'row',
//         borderBottomColor:'white',
//         borderBottomWidth:1,
//     },
//     image: {
//         flex: 0.15,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     SuccessImage: {
//         width: 30,
//         height: 30,
//     },
//     ListTitleBox:{
//         flex:0.45,
//         flexDirection:'row',
//         alignItems:'center',
//         // backgroundColor:'red'
//     },
//     dateBox:{
//         flex:0.4,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'flex-end',
//         paddingEnd:10,
//         // backgroundColor:'yellow'
//     },
//     ListTitle:{
//        color:"white",
//        fontSize:14,
//        fontFamily:'KhmerOScontent',
//     },
//     Date:{
//         color:"#aad8d3",
//         fontSize:12,
//         fontFamily:'KhmerOScontent',
//      },
//   });
  