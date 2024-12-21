import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { Context } from '../../context';

export default function NavMenu() {
  const { closeMenu, menuActive } = useContext(Context);

  const handleLinkClick = () => closeMenu();
  
  return (
    <nav className={[s.nav_container, menuActive ? s.active : ''].join(' ')}>
        <Link to='/' onClick={handleLinkClick} >Start</Link>
        <Link to='/über-uns' onClick={handleLinkClick} >Über Uns</Link>
        <Link to='/behandlung' onClick={handleLinkClick} >Behandlung</Link>
        <Link to='/preiseliste' onClick={handleLinkClick} >Preise</Link>
        <Link to='/kontakt' onClick={handleLinkClick} >Kontakt</Link>
        <IoCloseSharp onClick={closeMenu} className={s._svg} />
    </nav>
  )
}
