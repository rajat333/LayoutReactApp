import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

class Ticket extends Component{

    // constructor(props){
    //     super(props);
    // }
    
    render(){
        return(
            <div className="Ticket">
            <Sidebar />
            <div className="main">
            <h2>In Ticket Section</h2>
            </div>
            </div>
        )
    }
}

export default Ticket;