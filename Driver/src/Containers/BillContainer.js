import {connect} from 'react-redux'
import ScreenBill from '../Screens/ScreenBill'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    function1
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenBill)