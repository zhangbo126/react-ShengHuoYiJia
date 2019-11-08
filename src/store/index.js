import {combineReducers} from 'redux'
import home from '../store/home'
import sign from '../store/sign'
import user from '../store/user'
import location from '../store/isLocation'
import serch from '../store/serch'
import cart from '../store/cart'
export default combineReducers({home,sign,user,location,serch,cart})