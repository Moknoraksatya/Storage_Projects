import {connect} from 'react-redux'
import Delay from '../Screens/Delay'
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
)(Delay)