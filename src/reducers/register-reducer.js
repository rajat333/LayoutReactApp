import { userConstants } from '../_constants/user-constant';

const intialState = {
  registering: false,
  error:'',
  message: ''
}
export const registerReducer = (state = intialState, action)=> {
  
  switch (action.type) {
      case userConstants.REGISTER_REQUEST:
        return { registering: true };
    
      case userConstants.REGISTER_SUCCESS:
        return { 
          registering: true ,
          error: action.data.error,
          message: action.data.message
        };
    
      case userConstants.REGISTER_FAILURE:
        return { 
          registering: false ,
          error: true,
          message: action.data.message //msg
        };

      case userConstants.DEFAULT_REGISTER_STATE:
      // console.log(".....default reg reducer....");
          return{
             ...state,
             registering: false,
              error:'',
              message: ''
          }  
    
      default:
         return state
  }
}

export default registerReducer;