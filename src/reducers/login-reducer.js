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
            return {
                ...state,
                loggedIn: false,
                message: action.data.message,
                msg: action.msg,
                submit: true
            }

        case userConstants.DEFAULT_LOGIN_STATE:
            return {
                ...state,
                submit: false,
                loggedIn: false
            }

        case userConstants.USER_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                submit: false
            }

        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true, //action.data.error
                message: action.data.message,
                msg: action.msg,
                submit: true
            }

        case userConstants.CHANGE_FORM_STATE:
             return{
                  ...state,
                  loggedIn: userService.isUserLogIn(),
                  message: "",
                  submit: false,
                  msg: ""
             }    

        default:
            return {
                ...state,
                loggedIn: userService.isUserLogIn(),
                submit: false,
                message: '',
                msg: ''
            };

    }
}

export default loginReducer;