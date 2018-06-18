import { userConstants } from '../_constants/user-constant';

const intialState = {
  registering: false,
  error:'',
  message: ''
}
export const registerReducer = (state = intialState, action)=> {
  // console.log("...in registration reducer....",action)
  switch (action.type) {
      case userConstants.REGISTER_REQUEST:
        return { registering: true };
    
      case userConstants.REGISTER_SUCCESS:
      // console.log("..In registration success..",action);
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
        //  console.log("....default..state...");
         return state
  }
}

export default registerReducer;