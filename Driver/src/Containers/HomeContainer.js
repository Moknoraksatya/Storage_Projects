import {connect} from 'react-redux'
import ScreenHome from '../Screens/ScreenHome'
import {function1} from '../.././'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    function1
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenHome)