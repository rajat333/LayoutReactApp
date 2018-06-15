import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './_helpers';
import './App.css';
import asyncComponent from "./AsyncComponent";
import My404Component from "./components/404NotFound/My404NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import userService from "./services/userService";
// lazy loading import Home from "./components/Home/Home"; import Login from
// "./components/Login/Login"; import ContactUs from
// "./components/ContactUs/ContactUs"; import AboutUs from
// "./components/AboutUs/AboutUs"; import Register from
// './components/Register/Register'; import Dashboard from
// "./components/Dashboard/Dashboard"; import Profile from
// './components/Profile/Profile'; import Ticket from
// './components/Ticket/RaiseTicket';
import LogOut from './components/LogOut/LogOut';
// import SingleUser from './components/Dashboard/SingleUser/SingleUser';
const Home = asyncComponent(
    () => import ('./components/Home/Home').then(module => module.default)
)
const Login = asyncComponent(
    () => import ('./components/Login/Login').then(module => module.default)
)
const ContactUs = asyncComponent(
    () => import ('./components/ContactUs/ContactUs').then(module => module.default)
)
const AboutUs = asyncComponent(
    () => import ('./components/AboutUs/AboutUs').then(module => module.default)
)
const Register = asyncComponent(
    () => import ('./components/Register/Register').then(module => module.default)
)
const Dashboard = asyncComponent(
    () => import ('./components/Dashboard/Dashboard').then(module => module.default)
)
const Profile = asyncComponent(
    () => import ('./components/Profile/Profile').then(module => module.default)
)
const Ticket = asyncComponent(
    () => import ('./components/Ticket/RaiseTicket').then(module => module.default)
)
const SingleUser = asyncComponent(
    () => import ('./components/Dashboard/SingleUser/SingleUser').then(module => module.default)
)

class App extends Component {

    constructor(props) {
        super(props);
        // documentation https://github.com/ReactTraining/history
        history.listen((location, action) => {
            // clear alert on location change dispatch(alertActions.clear());
            console.log(
                "...location...action...",
                location,
                action,
                userService.isUserLogIn()
            );
        });
    }

    componentWillMount() {
        // console.log("..component will mount...");
    }

    componentWillReceiveProps(nextProps) {
        // console.log("...nextProps...",nextProps);
    }
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route component={My404Component}/>
                        </Switch>

                    </div>

                </Router>
            </div>
        );
    }
}

export default App;
