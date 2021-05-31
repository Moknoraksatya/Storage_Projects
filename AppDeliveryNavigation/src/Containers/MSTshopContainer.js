import {connect} from 'react-redux'
import MSTshop from '../Screens/MSTshop'
import { userLogout } from "../Modules/user/reducer";
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    userLogout
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MSTshop)