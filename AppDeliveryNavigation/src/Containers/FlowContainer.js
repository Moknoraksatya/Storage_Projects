import {connect} from 'react-redux'
import Flow from '../Screens/Flow'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Flow)