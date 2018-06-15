import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../Header/Header';
import GoogleMapReact from 'google-map-react';
import "./AboutUs.css";

class AboutUs extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            center: {
              lat: 28.5103741,
              lng: 77.09330120000004,
            },
            zoom: 11,
          };
    }

    componentWillMount(){
      if(this.props.isUserLogin){
          this.props.history.push("/dashboard");
       }
    }
      render(){
        return(
        <div className="About">
        <Header />
        <br/><br/><br/>
        <p className="aboutus-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div style={{  height:"500px",width:"70%",margin:"0 auto",marginBottom:"50px" }}>
        <GoogleMapReact
          defaultCenter={ this.state.center }
          defaultZoom={this.state.zoom}
        >
          <div>
          In Gurgaon
          </div>
        </GoogleMapReact>
      </div>
        </div>
        ); 
    }
}

const mapStateToProps = (state) => {
 return {
      isUserLogin: state.login.loggedIn,
  };
}
export default connect(mapStateToProps,null)(AboutUs);
