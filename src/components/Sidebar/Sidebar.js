import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {connect} from "react-redux";
import {userActions} from "../../actions/users-action";

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
    render() {
        return (
            <div className="Sidebar">
                <div className="sidenav">
                    <Link to="/dashboard" className="active">Dashboard</Link >
                    <Link to="/profile">Profile</Link >
                    <Link to="/ticket">Ticket</Link >
                    <Link to="/" onClick={this.logOuthandler}>Log Out</Link >
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