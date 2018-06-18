import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from '../../_helpers';
import Footer from "../Footer/Footer";
import asyncComponent from "../../AsyncComponent";

const Login = asyncComponent(
    () => import ('../Login/Login').then(module => module.default)
)
const ContactUs = asyncComponent(
    () => import ('../ContactUs/ContactUs').then(module => module.default)
)
const AboutUs = asyncComponent(
    () => import ('../AboutUs/AboutUs').then(module => module.default)
)
const Register = asyncComponent(
    () => import ('../Register/Register').then(module => module.default)
)
class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // reset login status
    // }
    componentWillMount(){
        // console.log("..In Component Will Mount home...",this.props);
        if(this.props.isUserLogin){
            this.props.history.push("/dashboard");
        }
    }
    render() {
       return (
            <div className="Home">         
            <Header />
            <div className="main-content"  
                 style={{  height: "400px", }}
            > 
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/contactus" component={ContactUs}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/register" component={Register}/>
                    </Switch>
             </Router>
            </div>
            <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("....state..person..login....", state);
    return {
        isUserLogin: state.login.loggedIn,
    };
}

export default connect(mapStateToProps,null)(Home);