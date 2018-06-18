import { userConstants } from '../_constants/user-constant';

const intialState = {
  userList: [],
  error:'',
  selectedUser: '',
  activeUser:{},
  profileUpdate: false,
}
export const usersReducer = (state = intialState, action)=> {

  // console.log("...in users reducer....",action);
  switch (action.type) {
    case userConstants.GETALL_SUCCESS:
    //  console.log("...In case1");
    return { 
            ...state,
            userList : action.userList,
            error: false,
            selectedUser:''
        };
    case userConstants.GETALL_FAILURE:
    console.log("...In case2");
    return { 
            ...state,
            userList : [],
            error: true,
            selectedUser:'',
    };

    case userConstants.GET_USER_BY_ID:
      //  console.log("...In case3...getusr by id");
       return{
            ...state,
            selectedUser: action.selectedUser,
            userList: action.userList, 
       }
     
    case userConstants.GET_USER_DATA:
    console.log("...getuserdata red...");
         return{
             ...state,
             activeUser: action.data
         }   
    case userConstants.UPDATE_USER_PROFILE:
         console.log("...........")
         return{
           ...state,
            profileUpdate: true,
         }

      default:
        //  console.log("...In default");
         return state
  }
}

export default usersReducer;