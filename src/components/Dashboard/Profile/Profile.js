import React, { Component } from 'react';
import { connect } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { userActions } from "../../../actions/users-action";
import "./Profile.css";

class Profile extends Component{

    constructor(props){
        super(props);
        this.state ={
            currentUser:{
                username:"",
                firstName:"",
                lastName:""
            },
            submit: false,
        }
        this.OnInputHandler = this.OnInputHandler.bind(this);   
        this.OnSubmitHandler = this.OnSubmitHandler.bind(this);   
       }

    componentWillMount(){
        // console.log("...Calling getallregisateruser...");
       var userObj= JSON.parse(localStorage.getItem("activeUser") || {} );
       this.setState({
           currentUser:  userObj,
       }) 
    }

    OnSubmitHandler(){
        // console.log("...OnSubmitHandler...");
        const obj = this.state.currentUser;
        this.setState({
            submit: true
        })
        this.props.updateProfile() 
    }
    
    OnInputHandler(event){
        // console.log("..OnInputHandler..",event.target,event.target.value);
    } 
    componentWillReceiveProps(nextProps){
        // console.log("..in component will recieve props..",this.props,nextProps);
    }
  
    render(){
        return(
            <div className="Profile">
            <Sidebar />
            <div className="main">
              In Profile Section
              <form>
                <div className="form-group">
                <label>FirstName</label>
                <input htmlFor="fname" className="form-control"
                       type="text" id="fname" 
                        value={this.state.currentUser.firstName} 
                        onChange={ this.OnInputHandler }
                />
                </div>
                <div className="form-group">
                <label>LastName</label>
                <input className="form-control" type="text" 
                        value={this.state.currentUser.lastName} 
                        onChange={ this.OnInputHandler }
                />
                </div>
                <div className="form-group">
                <label>UserName</label>
                <input className="form-control" type="text" 
                        value={this.state.currentUser.username } 
                        onChange={ this.OnInputHandler }
                />
                </div>
                <button className="btn btn-primary" disabled={ this.state.submit } onClick={ this.onSubmitHandler }>Submit</button>
              </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log("....state...Profle....",state);
    return{ 
        userList : state.users.userList,
     };   
 }

const mapDispatchToProps = dispatch =>{
    //  console.log("...In mapDIspatchToProps....");
     return {
         // different func for performing action
         getActiveUser: ()=> dispatch( userActions.getCurrentUser() ),
         updateUser: ()=> dispatch( userActions.updateProfile() ),
        } 
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(Profile);