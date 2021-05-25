import {connect} from 'react-redux'
import Branch from '../Screens/Branch'
import {function1} from '../..'
import MoneyDetail from '../Screens/MoneyDetail'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    function1
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoneyDetail)