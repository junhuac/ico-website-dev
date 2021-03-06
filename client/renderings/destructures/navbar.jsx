import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
const logo = "/images/Logo_1.png";

class Navbar extends React.Component{
  render(){
    return(
      <div className="col-12" id="navWrap">

        <nav className="row no-gutters justify-content-center" id="navbar">



                <div className="col-12 col-sm-12 col-lg-5 justify-content-center d-flex">
                <img src={logo} alt="NovaMining Logo" className="col-12 col-sm-10 col-md-4 align-self-center"/>
                </div>


                        <div className="col-12 col-lg-5 d-flex justify-content-center ">

                            <Link to="#" className="col-auto">
                                News
                            </Link>
                            <Link to="#" className="col-auto">
                               Document
                            </Link>
                            <Link target="_blank" to="https://medium.com/novamining" className="col-auto">
                               Blog
                            </Link>
                            <Link to="#" className="col-auto">
                               Ico
                            </Link>
                            <Link to="#" className="col-auto">
                               FAQ
                            </Link>
                            <Link to="#" className="col-auto">
                               Contacts
                            </Link>
                        </div>

          </nav>

        </div>

    )
  }
}

export default Navbar;
