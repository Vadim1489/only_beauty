import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { Context } from '../../context';

export default function NavMenu() {
  const { closeMenu, menuActive } = useContext(Context);
  return (
    <nav className={[s.nav_container, menuActive ? s.active : ''].join(' ')}>
        <Link to='/'>Start</Link>
        <Link to='/über-uns'>Über Uns</Link>
        <Link to='/behandlung'>Behandlung</Link>
        <Link to='/preiseliste'>Preise</Link>
        <Link to='/kontakt'>Kontakt</Link>
        <IoCloseSharp onClick={closeMenu} className={s._svg} />
    </nav>
  )
}
