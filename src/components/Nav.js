import React, { Component } from 'react'
import logo from '../img/logo.png';

class Nav extends Component {  
	render () {
    	return(
        	<nav className='nav'>
              <ul>
                <li className='p-0'>
                    <a href='https://hepsiburada.com'>
                        <img src={logo} className='logo' alt={'HepsiBurada.com'}/>
                    </a>
                </li>
                <li className='right p-0'>
                    <div className='header-text'>
                        <h1 className='fw-bold'>Link</h1>
                        <h1 className='fw-thin'>VOTE</h1> 
                        <h1 className='fw-normal'>Challenge</h1>
                    </div>
                </li>
              </ul>
           </nav>
        );
    }
} 

export default Nav;