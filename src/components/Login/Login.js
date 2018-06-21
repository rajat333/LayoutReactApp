import React from 'react';
import {Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  CryptoJS from "crypto-js";
import toast from '../../toasts';
import {userActions} from "../../actions/users-action";
import { userService } from '../../services/userService';
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
     
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.notifySuccess = this.notifySuccess.bind(this);
        this.notifyError = this.notifyError.bind(this);
    }

    notifySuccess(msg){
        toast.success(msg);
    }

    notifyError(msg){
        toast.error(msg);   
    }
    componentWillMount(){
         if(this.props.isUserLogin){ 
           toast.dismiss("dismiss");
           var that = this;
           setTimeout( ()=> {
            that.props.history.push("/dashboard");
           },2000);
          
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isUserLogin && nextProps.isFormSubumit){
             this.notifySuccess("Login Successful !");
            setTimeout(() => {
                nextProps.changeFormSubmitValue(); 
                toast.dismiss("dismiss");
                nextProps.history.push("/dashboard");
            }, 1000);
        }

        if(nextProps.isFormSubumit && !nextProps.isUserLogin){
           var that = this;
            setTimeout(() => {
                nextProps.changeFormSubmitValue(); 
                toast.dismiss("dismiss");
                that.setState({  
                                submitted: false,
                             }); 
                }, 3000);
         }

    } 

     componentWillUnmount(){
         //disable all login action to default value i.e intial State
        if(! userService.isUserLogIn() ){
              toast.dismiss("dismiss");
                this.props.loginDefaultState();  
       }
     }

    handleChange(e) { 
        toast.dismiss("dismiss");
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        this.refs.myInput.focus(); 
        if (username && password) {
            this.props
                .loginUser({username: username, password: password});
        }
    }

    render() {
        const {username, password, submitted} = this.state;
        const { isUserRegister , isUserLogin } = this.props;
        return(    
           <div className="LoginPage">
                <br/><br/><br/> 
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <br/><br/>
                    {  (this.props.isUserLogin ===false && this.props.isFormSubumit === true )
                         ? this.notifyError("Login Failed") 
                         :""
                    } 
                    { //(this.props.isUserLogin ===false && this.props.isFormSubumit === true ) ? <ToastContainer /> : ""
                    }   
                    {
                      this.props.isFormSubumit ? <ToastContainer /> : "" 
                    }
                   
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
                            <button className="btn btn-primary" disabled={ this.state.submitted }>Login</button>
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
        changeFormSubmitValue: ()=> dispatch( userActions.changeFormSubmitValue() ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;