import CryptoJS from "crypto-js";

function userRegister(userData) {
    var returnObj = {
        error: '',
        message: ''
    }
   
    if (localStorage.getItem('users')) {
        var bytes = CryptoJS.AES.decrypt(localStorage.getItem('users'), 'secret key 123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } else 
        var decryptedData = [];

    var userArray = localStorage.getItem("users")
        ? decryptedData
        : [];
    if (userArray.length > 0) {
        var found = userArray.some(function (element) {
            return element.username === userData.username;
        })
        if (!found) {
            userArray.push(userData);
            var ciphertext = CryptoJS
                .AES
                .encrypt(JSON.stringify(userArray), 'secret key 123');
            localStorage.setItem("users", ciphertext.toString());
            returnObj.error = false;
            returnObj.message = "Successfully Register User";
        } else {
            returnObj.error = true;
            returnObj.message = "User Already Exist. Please try again with different Username";
        }
    } else {
        userArray.push(userData);
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userArray), 'secret key 123');
        localStorage.setItem("users", ciphertext.toString());
        //localStorage.setItem("users",JSON.stringify(userArray));
        returnObj.error = false;
        returnObj.message = "Successfully Register User";
    }

    return returnObj;

}

function login(userCredits) {

    var returnObj = {
        error: '',
        message: ''
    }
    // console.log(".......in userService Login...",userCredits);  calling api for
    // user register use here localstorage
    if(localStorage.getItem('users')){
           var bytes = CryptoJS.AES.decrypt(localStorage.getItem('users'), 'secret key 123');
           var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }else{
        
    }
    var userArray = localStorage.getItem("users") ? decryptedData : [];

    if (userArray.length > 0) {
        var found = userArray.some(function (element) {
            //    console.log("...element.....",element)
            return (
                (element.username === userCredits.username) && (element.password === userCredits.password)
            );
        })
        if (found) {
            userCredits.nonce = new Date().getTime().toString();
            var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userCredits),'secret key 123');
            localStorage.setItem("activeUser", ciphertext.toString());
            returnObj.error = false;
            returnObj.message = "Successfully Login User";
        } else {
            //    console.log("....Cannot LOGIN....");
            returnObj.error = true;
            returnObj.message = "Please check your creditionals";
        }
    } else {
        returnObj.error = true;
        returnObj.message = "Please check your creditionals";
    }

    return returnObj;
}

function getAllUsers() {

    if(localStorage.getItem('users')){
        var bytes = CryptoJS.AES.decrypt(localStorage.getItem('users'), 'secret key 123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    var userList = decryptedData || [];
    console.log("...in service.. userlist..",userList);
    return {userList: userList}
}

function logOut() {
    // console.log("...userservice..logout..");
    localStorage.removeItem("activeUser");
    return {success: true}
}

function getUserById(id) {

    if(localStorage.getItem('users')){
        var bytes = CryptoJS.AES.decrypt(localStorage.getItem('users'), 'secret key 123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    var userData = decryptedData || [];
    const result = userData[id];
     return {selectedUser: result, userList: userData};
}

function isUserLogIn() {

    var user = localStorage.getItem("activeUser")
        ? localStorage.getItem("activeUser") : "";
    if (user.length === 0) {
        return false;
    } else {
        return true;
    }

}

export const userService = {
    userRegister,
    login,
    getAllUsers,
    logOut,
    getUserById,
    isUserLogIn
}

export default userService;