import {combineReducers} from 'redux'
import home from '../store/home'
import sign from '../store/sign'
import user from '../store/user'
import location from '../store/isLocation'
export default combineReducers({home,sign,user,location})