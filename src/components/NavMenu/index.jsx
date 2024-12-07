import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_container}>
        <Link to='/'>Start</Link>
        <Link to='/über-uns'>Über Uns</Link>
        <Link to='/behandlung'>Behandlung</Link>
        <Link to='/preiseliste'>Preise</Link>
        <Link to='/kontakt'>Kontakt</Link>
    </div>
  )
}
