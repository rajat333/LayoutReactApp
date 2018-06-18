import React, {Component} from 'react';
import {connect} from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import {userActions} from "../../../actions/users-action";
import "./Profile.css";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                username: "",
                firstName: "",
                lastName: "",
                password: ""
            },
            submit: true,
            editable: false
        }
        this.OnInputHandler = this
            .OnInputHandler
            .bind(this);
        this.OnSubmitHandler = this
            .OnSubmitHandler
            .bind(this);
        this.onEditHandler = this
            .onEditHandler
            .bind(this);
    }

    componentWillMount() {
        this
            .props
            .getActiveUser();
    }

    componentWillUnmount(){
        // console.log("...unmount..profile..");
    }
    OnSubmitHandler(event) {
        event.preventDefault();
        // console.log("...OnSubmitHandler...", this.state.currentUser.firstName);
        const obj = this.state.currentUser;
        this.setState(
            {submit: true, editable: false, firstName: this.state.currentUser.firstName, lastName: this.state.currentUser.lastName}
        );
        var obj1 = {firstName: this.state.currentUser.firstName, lastName: this.state.currentUser.lastName, username: this.state.currentUser.username}
        this.props.updateUser(obj1);
    }

    onEditHandler() {
        // console.log("...onedithandlert....");
        this.setState({
            editable: !this.state.editable,
            submit: !this.state.submit
        })
    }

    OnInputHandler(event) {
        event.preventDefault();
        // console.log("..OnInputHandler..", event.target, event.target.value);
        this.setState({
            currentUser: {
                ...this.state.currentUser,
                [event.target.name]: event.target.value
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        // console.log("..in component will recieve props..", nextProps);
        this.setState({currentUser: nextProps.activeUser})
    }

    render() {
        return (
            <div className="Profile">
                <Sidebar/>
                <div className="main">
                    In Profile Section
                    <form name="form" onSubmit={this.OnSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="fname">FirstName</label>
                            <input
                                className="form-control"
                                name="firstName"
                                type="text"
                                id="fname"
                                disabled={this.state.submit}
                                value={this.state.currentUser.firstName}
                                onChange={this.OnInputHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">LastName</label>
                            <input
                                className="form-control"
                                name="lastName"
                                type="text"
                                id="lname"
                                disabled={this.state.submit}
                                value={this.state.currentUser.lastName}
                                onChange={this.OnInputHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="uname">Username</label>
                            <input
                                className="form-control"
                                name="username"
                                type="text"
                                id="uname"
                                disabled={true}
                                value={this.state.currentUser.username}
                                onChange={this.OnInputHandler}/>
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={this.onEditHandler}
                            disabled={this.state.editable}>Edit</button>
                        &nbsp; &nbsp; &nbsp;
                        <button className="btn btn-primary" disabled={this.state.submit}>Submit</button>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("....state...Profle....", state);
    return {userList: state.users.userList, activeUser: state.users.activeUser};
}

const mapDispatchToProps = dispatch => {
    //  console.log("...In mapDIspatchToProps....");
    return {
        // different func for performing action
        getActiveUser: () => dispatch(userActions.getCurrentUser()),
        updateUser: (userObj) => dispatch(userActions.updateProfile(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);