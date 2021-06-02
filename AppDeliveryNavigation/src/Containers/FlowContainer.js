import {connect} from 'react-redux'
import Flow from '../Screens/Flow'
import {function1} from '../..'
// import { userRegister, userGetSMS, searchPackage } from "../Modules/user/reducer";
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    // userRegister,
    // userGetSMS,
    // searchPackage,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Flow)