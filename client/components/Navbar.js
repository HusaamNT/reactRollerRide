import React ,{useState} from 'react';
import {Link} from 'react-router-dom';



function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Roller Ride <i className='fa-solid fa-roller-coaster'/>
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i  className={click? 'fas fa-times':'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to ='/' className='nav-links'>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className='nav-links'>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Rides' className='nav-links'>
                    Rides
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Bookings' className='nav-links'>
                    Bookings
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Sign-Up' className='nav-links'>
                    Sign-Up
                </Link>
            </li>
          </ul>
        </div>
    </nav>
    
    
    
    
    
    </>

    
  )
}

export default Navbar