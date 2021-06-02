
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
import React,{Component,Fragment} from 'react'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native'
var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];
//   var RadioButtonProject = React.createClass({
//     getInitialState: function() {
//       return {
//         value: 0,
//       }
//     }
// },
    
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        return(
            <>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'null'} style={styles.container}>
                    <Fragment>
                    <RadioForm
                        radio_props={this.state.types}
                        initial={0}
                        formHorizontal={false}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => {this.setState({value:value})}}
                        />
                    </Fragment>
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
    
})