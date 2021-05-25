import {connect} from 'react-redux'
import MSTshop from '../Screens/MSTshop'
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
)(MSTshop)