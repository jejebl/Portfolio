import React from 'react'
import './Navbar.css';
import { HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <Link smooth to="#home"><div className='navbar_menu'>Home</div></Link>
      <Link smooth to="#tools"><div className='navbar_menu'>Tools</div></Link>
      <Link smooth to="#projects"><div className='navbar_menu'>Projects</div></Link>
    </div>
  )
}

export default Navbar
