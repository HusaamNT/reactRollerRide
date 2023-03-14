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
                <Link to='/' className='nav-links'>
                    About
                </Link>
            </li>


          </ul>
            

            

        </div>






    </nav>
    
    
    
    
    
    </>

    
  )
}

export default Navbar