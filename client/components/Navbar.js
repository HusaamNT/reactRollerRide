import React ,{useState} from 'react';


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i  className={click? 'fas fa-times':'fas fa-bars'}/>

          </div>
            
            

        </div>






    </nav>
    
    
    
    
    
    </>

    
  )
}

export default Navbar