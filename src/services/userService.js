

function userRegister(userData){
    var returnObj = {
        error:'',
        message:''
    }
  //  calling api for user register use here localstorage
      var userArray = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") ) : [] ;
      if(userArray.length >0){
           var found = userArray.some(function(element){ 
                return  element.username === userData.username;
           })
           if(!found){
               userArray.push(userData);
            //    console.log("......in..push..usetrarray...",userArray);
               localStorage.setItem("users",JSON.stringify(userArray)); 
               returnObj.error = false;
               returnObj.message = "Successfully Register User";              
           }
           else{
            //    console.log("....Cannot register....");
               returnObj.error = true;
               returnObj.message = "User Already Exist. Please try again with different Username";
           }
      }
      else{
        userArray.push(userData);
        localStorage.setItem("users",JSON.stringify(userArray));
        returnObj.error = false;
        returnObj.message = "Successfully Register User";
  }

  return returnObj;

} 

function login(userCredits){
    
    var returnObj = {
        error:'',
        message:''
    }
    // console.log(".......in userService Login...",userCredits);
    //  calling api for user register use here localstorage
      var userArray = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") ) : [] ;
      
      if(userArray.length >0){
           var found = userArray.some(function(element){ 
            //    console.log("...element.....",element)
                 return  ((element.username === userCredits.username)&&(element.password === userCredits.password));
           })
           if(found){
               localStorage.setItem("activeUser",JSON.stringify(userCredits)); 
               returnObj.error = false;
               returnObj.message = "Successfully Login User";              
           }
           else{
               console.log("....Cannot LOGIN....");
               returnObj.error = true;
               returnObj.message = "Please check your creditionals";
           }
      }
      else{
        returnObj.error = true;
        returnObj.message = "Please check your creditionals";
  }

  return returnObj;
}

function getAllUsers(){
    var userList = JSON.parse(localStorage.getItem('users') || [] );
    // console.log("...in service.. userlist..",userList);
    return{ 
            userList : userList,
         }
} 

function logOut(){
    // console.log("...userservice..logout..");
    localStorage.removeItem("activeUser");
    return{
        success: true,
    }
}

function getUserById(id){

    var userData = JSON.parse(localStorage.getItem("users") || [] );
    // console.log("...userData..id..",userData,id);
    const result = userData[id];
    // console.log("..result..is..",result);
    return {
            selectedUser : result,
            userList: userData,
         };
}

function isUserLogIn(){

    var user = localStorage.getItem("activeUser") ? JSON.parse(localStorage.getItem("activeUser") || {}) : { } ;
    if(Object.keys(user).length === 0 && user.constructor === Object) { 
        return false;
    }
    else{
      return true;
    }

}

export const userService ={
     userRegister,
     login,
     getAllUsers,
     logOut,
     getUserById,
     isUserLogIn ,
}

export default userService;