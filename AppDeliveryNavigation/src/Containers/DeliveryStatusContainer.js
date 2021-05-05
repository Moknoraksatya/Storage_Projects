import {connect} from 'react-redux'
import DeliveryStatus from '../Screens/DeliveryStatus'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeliveryStatus)