import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header className="books-header py-3">
        <div className="row  mr-5 flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="m-5" href="#">Subscribe</a>
          </div>
          <div className="col-4 text-center">
              <Link to='/'>
                <strong className="logo hidden-xs hidden-sm">
                  <h1 width="135" height="64" className="hidden-xs hidden-sm ml-5 text-uppercase logo_name">Book store</h1>
                </strong> 
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
            </a>
            <a className="btn btn-sm btn-outline-danger" href="#">Sign up</a>
                f 
            <a className="btn btn-sm btn-danger" href="#">Log In</a>

           </div>
        </div>
      </header>
      

    )

}
export default Header;