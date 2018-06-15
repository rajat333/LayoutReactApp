import { combineReducers } from 'redux';
import loginreducer from "./login-reducer";
import registerReducer from "./register-reducer";
import { usersReducer } from './users-reducer';

export const rootreducer = combineReducers({
        login : loginreducer,
        registration: registerReducer, 
        users: usersReducer,       
});
export default rootreducer;