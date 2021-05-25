import {connect} from 'react-redux'
import MotoMap from '../Screens/MotoMap'
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
)(MotoMap)