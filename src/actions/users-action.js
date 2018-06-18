// import { history } from '../_helpers';
import userConstants from "../_constants/user-constant";
import userService from "../services/userService";

var register = (userData)=>(dispatch)=>{
      // call api to check whether user exist or not in db i.e localStorage
    //  console.log("...in reg..action...");
      var obj = userService.userRegister(userData);
      if(obj.error){
        // console.log("..Error in Api");
        dispatch({ type: userConstants.REGISTER_FAILURE, msg:obj.message ,data:obj })
        // history.push
      }else{
        //  console.log("..Sucessin API...");
         dispatch({ type: userConstants.REGISTER_SUCCESS, msg:"SUCCESS" , data: obj })
        //  history.push("/register");
      }
}
var login = (userCredits)=>(dispatch)=>{

  var obj = userService.login(userCredits);
    if(obj.error){
    //   console.log("..Error in Login Api");
      dispatch({ type: userConstants.LOGIN_FAILURE, msg:"Failure" ,data:obj })
      // history.push
    }else{
    //    console.log("..Sucessin login API...");
       dispatch({ type: userConstants.LOGIN_SUCCESS , msg:"SUCCESS" , data: obj })
    //    history.push("/dashboard");
    }
}
var logout = ()=>(dispatch)=>{
    // console.log("...In useraction logout.");
    var obj = userService.logOut();
    if(obj.success){
        // console.log("..Success in Log Out");
        dispatch({ 
          type: userConstants.USER_LOGOUT,
          logout : true
        });
    }else{
    //   console.log("..Failure in Log Out");
    }
}
var getAll = ()=>(dispatch)=>{
    // console.log("....in getalll...");
   var usersObj = userService.getAllUsers();
//    console.log("...In action getAll...",usersObj); 
   dispatch({ 
          type: userConstants.GETALL_SUCCESS,
          userList : usersObj.userList
    })
}

var _delete = ()=>(dispatch)=>{

}

var getUserById = (userId)=>(dispatch)=>{

    // console.log("...getUserById...",userId);
    let obj =  userService.getUserById(userId);
    // console.log("...getUseerByd...",obj);
    dispatch({
        type: userConstants.GET_USER_BY_ID,
        selectedUser: obj.selectedUser,
        userList: obj.userList
    })
}

var defaultLoginState = ()=>(dispatch)=>{

    // console.log("...IndefaultLoginState...");
    dispatch({
         type: userConstants.DEFAULT_LOGIN_STATE,
    });
}

var getCurrentUser= ()=>(dispatch)=>{
    var userObj = JSON.parse(localStorage.getItem('activeUser'));
    var userArray = JSON.parse(localStorage.getItem('users'));
    var result = userArray.filter(element => {
         
        return ((userObj.username === element.username) && (userObj.password === element.password));
    })
    console.log("...result...is...",result);
    dispatch({
        type: userConstants.GET_USER_DATA,
        data: result[0],
    })
}

var updateProfile = (userObj)=>(dispatch)=>{
    
    let userArray = JSON.parse(localStorage.getItem('users'));
    var foundIndex = userArray.findIndex(x => x.username === userObj.username);
    userArray[foundIndex].firstName = userObj.firstName;
    userArray[foundIndex].lastName = userObj.lastName;
    localStorage.setItem('users',JSON.stringify(userArray));
    dispatch({
        type: userConstants.UPDATE_USER_PROFILE,
        data: userObj
    })
}

var defaultRegState= ()=>(dispatch)=>{
     console.log(".....defaultregstate..");
     dispatch( {
        type: userConstants.DEFAULT_REGISTER_STATE
    });
}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getUserById,
    delete: _delete,
    defaultLoginState,
    getCurrentUser,
    updateProfile,
    defaultRegState,
};

// export default userActions;