import {connect} from 'react-redux'
import Screen_02 from '../Screens/Screen_02'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Screen_02)