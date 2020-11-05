import { combineReducers } from 'redux';
import authReducer from './authReducer';
// we have to import the reducer from redux-form to 
// link it with our store
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer
})