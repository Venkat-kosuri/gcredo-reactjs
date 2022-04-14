import React from 'react';
import './Navbar.css';
import {BsSearch,BsFillCartFill} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="wrapper">
        <nav className="navbar navbar-light bg-light">
  <div className="container">
     <img src="https://gcredo.com/static/media/gcredo-logo.2ae36024.png" alt="eco-iamge" className='img-fluid' height="45" width="176px"/>
     <div className='navbar-right'>
    <form className="d-flex">
    <div className='d-flex'>
                 <div class="input-group">
  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>EN</option>
    <option value="1">Australia</option>
    <option value="2">Canada</option>
   
  </select>
</div>
                 <div class="input-group">
  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>India</option>
    <option value="1">Australia</option>
    <option value="2">Canada</option>
   
  </select>
</div>
</div>
      <button className="navbar-button" type="submit">PARTNER WITH US </button>
    </form>
    </div>
  </div>

</nav>
    </div>

   

    <div className=" navbar-header" >
         <input type="checkbox" name="" id="check" />
            <div className= 'nav-btn' >
                <div className="nav-links">
                    <ul>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/certification'>Certifications</Link>
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/'>Ways To Get Certified</Link>
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/'>Advanced You Career</Link>
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/'>For Corporation</Link>
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/'>About Us</Link>
                        </li>
                          <div className='d-flex'>
                          <strong className='navbar-icons'><BsSearch></BsSearch></strong>
                            <strong className='navbar-icons'><BsFillCartFill></BsFillCartFill></strong>
                            <strong className='navbar-icons'><AiOutlineUser></AiOutlineUser></strong>
                          </div>
                            
                       
                       
                    </ul>
                </div>
             

            </div>
            <div className="hamburger-menu-container " >
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Navbar