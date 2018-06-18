import React, {Component} from 'react';
// import Background from "../../../public/images/frontbg.jpg";
var sectionStyle = {
    width: "100%",
    height: "400px",
    marginTop:"51px",
    textAlign:"center",
    backgroundColor:"grey",
  };

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div className="frontbackground" style={ sectionStyle }>
                <p style={ { color:"white", } }>
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
               </p>
                
                </div>
            </div>

        );
    }
}

export default Footer;