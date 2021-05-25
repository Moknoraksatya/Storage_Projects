import {connect} from 'react-redux'
import Branch from '../Screens/Branch'
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
)(Branch)