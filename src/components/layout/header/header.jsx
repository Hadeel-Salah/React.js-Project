import React from 'react';
import './style.css'

function Header(){
    return(
        <header class="books-header py-3">
        <div class="row  mr-5 flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="m-5" href="#">Subscribe</a>
          </div>
        <div class="col-4 text-center">
            <strong class="logo hidden-xs hidden-sm">
                <img src="https://www.packtpub.com/media/logo/stores/1/logo.png" title="Packt Logo" alt="Packt Logo" width="135" height="64" class="hidden-xs hidden-sm ml-5" />
            </strong> 
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
            </a>
            <a class="btn btn-sm btn-outline-danger" href="#">Sign up</a>
          </div>
        </div>
      </header>
      

    )

}
export default Header;