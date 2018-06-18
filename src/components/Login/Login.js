import React from 'react';
import {Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from '../../toasts';
import {userActions} from "../../actions/users-action";
// import { userConstants } from '../../actions/users-action';

class Login extends React.Component {
    constructor(props) {
        super(props);
        // reset login status this.props.dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        // console.log("...this props///", this.props);
        // var m = this.props.login.loggedIn ? true : false; 
        // if(m){
        //     console.log("....ififif");
        //     this.props.history.push("/dashboard")
        // }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSuccessToast = this.renderSuccessToast.bind(this);
        this.notifySuccess = this.notifySuccess.bind(this);
        this.notifyError = this.notifyError.bind(this);
        
    }

    notifySuccess(msg){
        // console.log(".....in..notify..login success...",msg);
        toast.success(msg);
    }
    
    notifyError(msg){
        // console.log("...error login fail");
        toast.error(msg);
    }
    componentWillMount(){
        // console.log("..In Component Will Mount login...");
        if(this.props.isUserLogin){ 
           this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("..Login nextprops..",nextProps);
        if(nextProps.isUserLogin){
            //calling toast for login success
            this.notifySuccess("Login Successful !");
            setTimeout(() => {
                nextProps.history.push("/dashboard"); 
            }, 1000);
           
        }
    } 

     componentWillUnmount(){
         //disable all login action to default value i.e intial State
        // console.log("...Login..ComponentWillUnMount..");
        this.props.loginDefaultState();    
     }

    renderSuccessToast() {
        // console.log("..inrenderSuccesToast...");
    //  toast.warn("Registration Successfull !");
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        // const { dispatch } = this.props; console.log("...this props///",this.props);
         this.refs.myInput.focus(); 
        if (username && password) {
            // dispatch(userActions.login(username, password));
            this.props
                .loginUser({username: username, password: password});
        }
    }

    render() {
        const {username, password, submitted} = this.state;
        const { isUserRegister , isUserLogin } = this.props;
        return(    
           <div className="LoginPage">
                <br/><br/><br/> {
                    // this.props.isUserRegister
                    //     ? <p style={ { color:"red" } }>Registration Successfull</p>
                    //     : null
                } 
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <br/><br/>
                    {  (this.props.isUserLogin ===false && this.props.isFormSubumit === true )
                         ? this.notifyError("Login Failed") 
                         :""
                    } 
                    <ToastContainer />
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div
                            className={'form-group' + (
                                submitted && !username
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"  ref = "myInput"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.handleChange}/> {submitted && !username && <div className="help-block">Username is required</div>}
                        </div>
                        <div
                            className={'form-group' + (
                                submitted && !password
                                    ? ' has-error'
                                    : ''
                            )}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.handleChange}/> {submitted && !password && <div className="help-block">Password is required</div>}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                            <Link to="/register" className="btn btn-link">Register</Link>
                        </div>
                    </form>
                </div>
            </div>            
        );    
    }
}

const mapStateToProps = (state) => {
    console.log("....state..person..login....", state);
    return {
        
        isUserRegister: state.registration.registering,
        isUserLogin: state.login.loggedIn,
        isFormSubumit: state.login.submit 
    };
}

const mapDispatchToProps = dispatch => {
    // console.log("...In mapDIspatchToProps....");
    return {
        // different func for performing action
        loginUser: (userCredits) => dispatch(userActions.login(userCredits)),
        loginDefaultState: ()=> dispatch(userActions.defaultLoginState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;