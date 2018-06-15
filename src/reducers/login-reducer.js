import {userConstants} from "../_constants/user-constant";
import {userService} from "../services/userService";

var intialState = {
    loggedIn: false,
    submit: false,
    message: '',
    msg: ''
}
export const loginReducer = (state = intialState, action) => {
    // console.log("..In Login reducer", action);
   
    switch (action.type) {

        case userConstants.LOGIN_FAILURE:
            console.log("..In loginfailure reducer");
            return {
                ...state,
                loggedIn: false,
                message: action.data.message,
                msg: action.msg,
                submit: true
            }
            
        case userConstants.DEFAULT_LOGIN_STATE:
            console.log("....default..action...");
            return{
                 ...state,
                 submit:false,
                 loggedIn:false,
                 
            }    

        case userConstants.USER_LOGOUT:
            // console.log("...Logout reducer...");
            return {
                ...state,
                loggedIn: false,
                submit:false
            }

        case userConstants.LOGIN_SUCCESS:
            // console.log("..In loginsucc reducer");
            return {
                ...state,
                loggedIn: true, //action.data.error
                message: action.data.message,
                msg: action.msg,
                submit: true,
            }

        default:
            // console.log("..IndefaultLoginreducer");
            return {
                ...state,
                loggedIn: userService.isUserLogIn()
            };

    }
}

export default loginReducer;