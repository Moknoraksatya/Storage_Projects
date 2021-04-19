import {connect} from 'react-redux'
import SpecailInfo from '../Screens/SpecailInfo'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpecailInfo)