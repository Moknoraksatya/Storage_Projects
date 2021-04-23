import {connect} from 'react-redux'
import ScreenReceipt from '../Screens/ScreenReceipt'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenReceipt)
