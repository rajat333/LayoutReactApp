import React, {Component} from 'react';
import {  Link} from 'react-router-dom'
// import Background from "../../../public/images/frontbg.jpg";
var sectionStyle = {
    width: "100%",
    height: "400px",
    marginTop:"51px",
    backgroundImage: "url(/images/frontbg.jpg)",
  };

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchKey : ''
        };
        this.OnInputChangeHandler = this.OnInputChangeHandler.bind(this);
    }    

    OnInputChangeHandler(event){
        // console.log("...On Input Change Handler..");
        this.setState({
             searchKey: event.target.value,
        })
    }

    onSubmit(){
        // console.log("...On Submit..");
    }
    render() {
        return (
            <div className="Header">

                <nav className="navbar navbar-inverse container-fluid navbar-fixed-top">
                    <div>
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Demo React App</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="">
                                    <Link to="/">
                                        <span className="glyphicon glyphicon-home"></span>
                                        Home</Link>
                                </li>
                                <li>
                                    <Link to="about" href="#">
                                        <span className="glyphicon glyphicon-king"></span>
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left" role="search">
                                <div className="form-group-sm">
                                    <div className="input-group">
                                        <input type="text" className="form-control" 
                                                value={this.state.searchKey} 
                                                placeholder="Search"  onChange={ this.OnInputChangeHandler }
                                        />
                                        <span className="input-group-btn">
                                            <button className="btn btn-success btn-sm" onClick={ ()=> this.onSubmit() }>Go!</button>
                                        </span>
                                    </div>
                                </div>

                            </form>
                            <ul className="nav navbar-nav navbar-right">
                            <li>
                                    <Link to="contactus">
                                        <span className="glyphicon glyphicon-phone"></span>
                                        Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="login" className="active">
                                        <span className="glyphicon glyphicon-log-in"></span>
                                        Login</Link>
                                </li>
                                <li>
                                    <Link to="register" href="#">
                                        <span className="glyphicon glyphicon-user"></span>
                                        Register</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="frontbackground" style={ sectionStyle }></div>
            </div>

        );
    }
}

export default Header;