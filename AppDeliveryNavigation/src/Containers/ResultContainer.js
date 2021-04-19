import {connect} from 'react-redux'
import resultPackage from '../Screens/resultPackage'
import {function1} from '../..'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(resultPackage)