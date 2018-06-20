import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { connect } from "react-redux";

class Ticket extends Component{

    constructor(props){
        super(props);
        this.state = {
            type: 1,
            comments:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    
    handleChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({ [name] : event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
    }
    handleTextArea(event){
        this.setState({
            comments: event.target.value,
        })
    }  
    
    render(){
        return(
            <div className="Ticket col-md-4 col-md-offset-4">
            <h2>In Ticket Section</h2>
            <form name="form"  onSubmit={this.handleSubmit}>
            
            <div className='form-group col-sm-6 col-sm-offset-2'>
            <label style={{ marginRight: "19px",}} htmlFor="lastName">Ticket Type</label>
                <select style={{ width:"100px",height: "29px" }} 
                        onChange={this.handleChange}
                        name="type" value={  this.state.type }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
            </div>
            <div className="col-sm-6 col-sm-offset-2">
            <label style={{ marginRight: "19px" }} >Comments</label>
            <textarea rows="5" cols="15" 
                        name="comments"
                        onChange={ this.handleChange }
                        value={ this.state.comments }
            />
            </div> 
           <div className="col-sm-6 col-sm-offset-2">
           <button className="btn btn-primary"  onClick={ this.submitHandler } >Submit</button>
           </div>        
        </form>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
     
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    //  console.log("...In dispatch..");
     return {

     }
}

export default connect(mapStateToProps,null)(Ticket);