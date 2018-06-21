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
        this
            .props
            .logout();
    }

    componentWillMount() {}

    componentWillReceiveProps(nextProps) {}
    render() {
        var menuPath = window
            .location
            .href
            .substr(21);
        return (
            <div className="Sidebar">
                <div className="sidenav">
                    <Link
                        to="/dashboard/main"
                        className="active"
                        style={{
                            color: (menuPath === "/dashboard/main" || menuPath === "/dashboard/main/")
                                ? "blue"
                                : "white"
                        }}>Dashboard</Link >
                    <Link
                        to="/dashboard/profile"
                        style={{
                            color: (
                                menuPath === "/dashboard/profile" || menuPath === "/dashboard/profile/"
                            )
                                ? "blue"
                                : "white"
                        }}>Profile</Link >
                    <Link
                        to="/dashboard/ticket"
                        style={{
                            color: (menuPath === "/dashboard/ticket" || menuPath === "/dashboard/ticket/")
                                ? "blue"
                                : "white"
                        }}>Ticket</Link >
                    <Link
                        to="/"
                        onClick={this.logOuthandler}
                        style={{
                            color: menuPath === "/"
                                ? "blue"
                                : "white"
                        }}>Log Out</Link >
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {isUserRegister: state.registration.registering};
}

const mapDispatchToProps = dispatch => {
    return {
        // different func for performing action
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);