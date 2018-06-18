import React , { Component } from 'react';
import { connect } from "react-redux";

class ContactUs extends Component{
 
  componentWillMount(){
    if(this.props.isUserLogin){
        this.props.history.push("/dashboard");
     }
 
    }
    render(){
        return(
            <div className="Contact col-md-6 col-md-offset-3">
             <h1>Contact Us</h1>
             <br/><br/><br/>
             <form className="form-horizontal" action="/action_page.php">
             <div className="form-group">
             <label className="control-label col-sm-2" htmlFor="name">Name</label>
             <div className="col-sm-4 col-sm-offset-2">
               <input type="text" className="form-control" id="name" placeholder="Enter Name" />
             </div>
           </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="email">Email:</label>
               <div className="col-sm-4 col-sm-offset-2">
                 <input type="email" className="form-control" id="email" placeholder="Enter email" />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="mb">Mobile: </label>
               <div className="col-sm-4 col-sm-offset-2"> 
                 <input type="number" maxLength="12" className="form-control" id="mb" placeholder="Enter Comments" />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="cmt">Comments:</label>
               <div className="col-sm-4 col-sm-offset-2"> 
                 <input type="text" className="form-control" id="cmt" placeholder="Enter Comments" />
               </div>
             </div>
             <div className="form-group"> 
               <div className="col-sm-10">
                 <div className="checkbox">
                   <label><input type="checkbox" /> Remember me</label>
                 </div>
               </div>
             </div>
             <div className="form-group"> 
               <div className="col-sm-10">
                 <button type="submit" className="btn btn-success">Submit</button>
               </div>
             </div>
           </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
       isUserLogin: state.login.loggedIn,
   };
 }
export default connect(mapStateToProps,null)(ContactUs) ;