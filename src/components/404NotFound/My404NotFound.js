import React, {Component} from 'react';
import {userService} from "../../services/userService";
import {history} from "../../_helpers";

class My404NotFound extends Component {

    componentWillMount() {
        // console.log("..404..",this.props,userService.isUserLogIn(),history);
        if (userService.isUserLogIn()) {
            history.push("/dashboard/main");
        }
    }
    render() {
        return (
            <div className="not-found">
                <h1>404 Not Found</h1>
            </div>
        );
    };

}

export default My404NotFound;