import {connect} from 'react-redux'
import CreditDetail from '../Screens/CreditDetail'
import {function1} from '../..'
import CallHistory from '../Screens/CallHistory'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    function1
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreditDetail)