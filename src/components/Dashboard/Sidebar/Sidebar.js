import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {connect} from "react-redux";
import {userActions} from "../../../actions/users-action";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.logOuthandler = this
            .logOuthandler
            .bind(this);
    }

    logOuthandler() {
        this.props.logout();
    }
   
    componentWillMount(){
        console.log("....sidebar...",this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log("....Sidebar...",nextProps);
    }
    render() {
        return (
            <div className="Sidebar">
                <div className="sidenav">
                    <Link to="/dashboard/main" className="active" style={{ color: this.props.currentMenu ==="/dashboard/main" ? "blue" : "white" }}>Dashboard</Link >
                    <Link to="/dashboard/profile" style={{ color: this.props.currentMenu ==="/dashboard/profile" ? "blue" : "white" }}>Profile</Link >
                    <Link to="dashboard/ticket" style={{ color: this.props.currentMenu ==="/dashboard/ticket" ? "blue" : "white" }}>Ticket</Link >
                    <Link to="/" onClick={this.logOuthandler} style={{ color: this.props.currentMenu ==="/dashboard/ticket" ? "blue" : "white" }}>Log Out</Link >
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    // console.log("....state..person..login....", state);
    return {
        isUserRegister: state.registration.registering
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // different func for performing action
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);