import React , { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../actions/users-action";
import Sidebar from "../Sidebar/Sidebar";

class SingleUser extends Component{
    
      // constructor(props) {
      //     super(props);
      //   //  console.log("....SingleUserProps..",this.props.match.params.id); 
      //  }

       componentWillMount(){
        //    console.log("....SibgleUser..ComponentWillMount...")
           var userId = this.props.match.params.id;
           this.props.getUserById(userId);
       }
       componentWillReceiveProps(nextProps) {
        //  console.log("..SIngkle Component will RecieveProps",nextProps,this.props);  
        // To Avoid Infinite Loop
         if(this.props.match.params.id !== nextProps.match.params.id){
            this.props.getUserById(nextProps.match.params.id);
         }
       }
    render(){   
    return (
      <div className="SingleUser">
        <Sidebar />
       <h1>Clicked User Detail Will be Shown Here</h1> 
        { this.props.isUserSelected ? (
           <div className="selectedUser">
            <p> First Name is:-<b>{ this.props.selectedUser.firstName }</b>
            </p>
            <p> Last Name is:-<b>{ this.props.selectedUser.lastName }</b>
            </p>
            <p> User Name is:-<b>{ this.props.selectedUser.username }</b>
            </p>
            </div>
        ) : null

        }     
      </div>
    )
  }
} 

const mapStateToProps = (state)=>{
    //  console.log("..State in SingleUser...",state);
     return{
         isUserSelected : state.users.selectedUser ? true : false,
         selectedUser : state.users.selectedUser,
     }
}

const mapDispatchToProps = (dispatch)=>{
     return{
        getUserById :(id)=> dispatch( userActions.getUserById(id) ), 
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleUser);  