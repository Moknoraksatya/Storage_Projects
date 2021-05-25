import {connect} from 'react-redux'
import ChangeNShop from '../Screens/ChangeNShop'
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
)(ChangeNShop)