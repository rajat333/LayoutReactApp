import {userConstants} from '../_constants/user-constant';

const intialState = {
    userList: [],
    error: '',
    selectedUser: '',
    activeUser: {},
    profileUpdate: false
}
export const usersReducer = (state = intialState, action) => {

    switch (action.type) {
        case userConstants.GETALL_SUCCESS:
            return {
                ...state,
                userList: action.userList,
                error: false,
                selectedUser: ''
            };
        case userConstants.GETALL_FAILURE:
            return {
                ...state,
                userList: [],
                error: true,
                selectedUser: ''
            };

        case userConstants.GET_USER_BY_ID:
            return {
                ...state,
                selectedUser: action.selectedUser,
                userList: action.userList
            }

        case userConstants.GET_USER_DATA:
            return {
                ...state,
                activeUser: action.data
            }
        case userConstants.UPDATE_USER_PROFILE:  
            return {
                ...state,
                profileUpdate: true,
                activeUser: action.data
            }

        default:
            return state
    }
}

export default usersReducer;