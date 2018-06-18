import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import Sidebar from "./Sidebar/Sidebar";
import {userActions} from "../../actions/users-action";
import "./Dashboard.css";
import SingleUser from './SingleUser/SingleUser';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {userService} from '../../services/userService';
import DashboardMain from './DashboardMain/DashboardMain';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from '../../_helpers';
import Profile from './Profile/Profile';
import Ticket from './Ticket/RaiseTicket';
import My404NotFound from "../404NotFound/My404NotFound";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (this.props.location.pathname === '/dashboard' && userService.isUserLogIn()) {
            this
                .props
                .history
                .push("/dashboard/main");
        }
        // this.props.getRegisteredUsers();
    }

    componentWillReceiveProps(nextProps) {
        // console.log("..in component will recieve Dashboard
        // props..",this.props,nextProps);
    }

    render() {
        const currentLocation = this.props.location.pathname;

        return (
            <div className="Dashboard">
                <Sidebar currentMenu={currentLocation}/>
                <div className="main">
                    <Router history={history}>
                        <div>
                            <Switch>

                                <PrivateRoute path="/dashboard/main" component={DashboardMain}/>
                                <PrivateRoute path="/dashboard/profile" component={Profile}/>
                                <PrivateRoute path="/dashboard/ticket" component={Ticket}/>
                                <Route component={My404NotFound}/>
                            </Switch>

                        </div>

                    </Router>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("....state...Dashboard....",state);
    return {userList: state.users.userList};
}

const mapDispatchToProps = dispatch => {
    //  console.log("...In mapDIspatchToProps....");
    return {
        // different func for performing action
        getRegisteredUsers: () => dispatch(userActions.getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);