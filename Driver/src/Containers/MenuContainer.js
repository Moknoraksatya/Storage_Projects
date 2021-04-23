import {connect} from 'react-redux'
import ScreenMenu from '../Screens/ScreenMenu'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenMenu)
