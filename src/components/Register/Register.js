import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import $ from 'jquery';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from '../../toasts';
import {userActions} from '../../actions/users-action';
import {userConstants} from "../../_constants/user-constant";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false,
            loading: false
        };
        // this.myRef = React.createRef;
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.notifySuccess = this
            .notifySuccess
            .bind(this);
    }

    notifySuccess(msg) {
        toast.success(msg);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true, loading: true});
        const {user} = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.notifySuccess("Success");
            this
                .props
                .registerUser(user);
            // console.log("...User register successfully..");
        }
    }

    componentWillMount() {
        if (this.props.isUserLogin) {
            this
                .props
                .history
                .push("/dashboard");
        }
    }

    componentWillUnmount() {
        toast.dismiss("Dismiss all");
        this
            .props
            .registerDefaultState();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.registering) {
            setTimeout(function () {
                nextProps.registerDefaultState();
                nextProps
                    .history
                    .push("/login");
            }, 3000);
        }
    }

    render() {

        const {user, submitted} = this.state;
        return (
            <div className="Register">
                <div className='sweet-loading'>

                    { // this.state.loading ? <img src="https://www.sc.com/id/en/insure/images/pre-loader.gif" alt="loader"/> :
                        //   ""
                    }
                </div>
                <div className="col-md-6 col-md-offset-3">
                    {/* React toastify for toast container */}
                    {
                        this.props.registering
                            ? <ToastContainer/>
                            : null
                    }
                    <h2>Register</h2>
                    {
                        this.props.registering
                            ? <span
                                    style={{
                                        color: "red"
                                    }}>Registration Sucessful! You will be redirected to Login...</span>
                            : ""
                    }
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div
                            className={'form-group' + (
                                submitted && !user.firstName
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                ref="firstName"
                                className="form-control"
                                name="firstName"
                                value={user.firstName}
                                onChange={this.handleChange}/> {submitted && !user.firstName && <div className="help-block">First Name is required</div>}
                        </div>
                        <div
                            className={'form-group' + (
                                submitted && !user.lastName
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={user.lastName}
                                onChange={this.handleChange}/> {submitted && !user.lastName && <div className="help-block">Last Name is required</div>}
                        </div>
                        <div
                            className={'form-group' + (
                                submitted && !user.username
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={user.username}
                                onChange={this.handleChange}/> {submitted && !user.username && <div className="help-block">Username is required</div>}
                        </div>
                        <div
                            className={'form-group' + (
                                submitted && !user.password
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={user.password}
                                onChange={this.handleChange}/> {submitted && !user.password && <div className="help-block">Password is required</div>}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>

                            { //this.props.registering &&
                                //    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="" />
                            }
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("....state..registration...", state);
    return {registering: state.registration.registering, isUserLogin: state.login.loggedIn};
}

const mapDispatchToProps = dispatch => {
    // console.log("...In mapDIspatchToProps....");
    return {
        // different func for performing action
        registerUser: (userData) => dispatch(userActions.register(userData)),
        registerDefaultState: () => dispatch(userActions.defaultRegState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);