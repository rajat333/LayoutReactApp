import React, {Component} from "react";
import {connect} from "react-redux";
import {userActions} from "../../actions/users-action";
import Header from "../Header/Header";

class LogOut extends Component {

    componentWillMount() {
        this
            .props
            .logout();
    }
    render() {
        return (
            <div className="LogOut">
                <Header/>
                <h2>You have been sucessfully Log Out.</h2>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // userList : state.users.userList,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        // different func for performing action
        logout: () => dispatch(userActions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogOut);