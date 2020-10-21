import React from 'react';
import './style.css'

function Footer(){
    return(
    
        <footer className="page-footer font-small blue pt-4">
         
          <div className="container-fluid text-center text-md-left">
        
            <div className="row">
        
              <div className="col-md-6 pl-5">
                <h5 className="text-uppercase">Subscribe</h5>
                <p className="w-75">
                    Sign up to our emails for regular updates, bespoke offers, 
                   exclusive discounts and great free content.
                </p>
                <div className="content">
                <form className="form subscribe" novalidate="" action="https://www.packtpub.com/newsletter/subscriber/new/" method="post">
                    <div className="field newsletter">
                        <label className="label" for="newsletter">
                            <span className="signup">Sign Up for Our Newsletter:</span></label>
                        <div className="control">
                            <input className="email" type="email" id="newsletter" placeholder="Enter your email address"></input>
                            <button className="action subscribe btn-danger" title="Submit" type="submit">
                            <span>Submit</span>
                            </button>
                            </div>
                    </div>
                </form>
                </div>   
              </div>  
                 
              <hr className="clearfix w-100 d-md-none pb-3"></hr>
        
              <div className="col-md-3 mb-md-0 mb-3">
        
                <h5 className="text-uppercase">Useful Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">About Us</a>
                  </li>
                  <li>
                    <a href="#!">Our Authors</a>
                  </li>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                  <li>
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#!">View our Cookie Policy</a>
                  </li>
                </ul>
        
              </div>
           
              <div className="col-md-3 mb-md-0 mb-3">
        
                <h5 className="text-uppercase">Help & Support</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a href="#!"> Support Home</a>
                  </li>
                  <li>
                    <a href="#!">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="#!">Orders & Purchases</a>
                  </li>
                  <li>
                    <a href="#!">Code Download & Errata</a>
                  </li>
                  <li>
                    <a href="#!">Submit Errata</a>
                  </li>
                  <li>
                    <a href="#!">Contact Us</a>
                  </li>
                </ul>
        
              </div>
        
        
            </div>
            
        
          </div>
      
          <div className="footer-copyright text-center py-3">
              © 2020 All Rights Reserved : Location Palestine
          </div>
      
        </footer>

    )

}
export default Footer;