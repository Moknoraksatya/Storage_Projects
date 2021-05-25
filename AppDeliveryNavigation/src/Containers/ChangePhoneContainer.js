import {connect} from 'react-redux'
import ChangePhone from '../Screens/ChangePhone'
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
)(ChangePhone)