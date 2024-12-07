import React from 'react'
import s from './index.module.css'

export default function ContactPage() {
  return ( 
  <div className={s.container}>
    <h2>Kontakt</h2>
    <div className={s.container_info}>
      <div className={s.name}>
        <h5>ONLY BEAUTY by Larissa</h5>
        <h4>Larissa Nitz</h4>
      </div>
      <div className={s.adress}>
        <h6>Adresse</h6>
        <a href='https://maps.app.goo.gl/Px9T8u3oPtezUury5' target='_blank'>Lößniger Straße 15 <br /> 04275, Leipzig </a>
      </div>
      <div className={s.phone}>
        <h6>MOBIL & WHATSAPP</h6>
        <a href={`https://wa.me/${+4915170128870}`} target='_blank'><p> 015170128870</p></a>
      </div>
      <div className={s.mail}>
          <h6>E-mail </h6>
        <a href='mailto:onlybeautyleipzig@gmail.com'>onlybeautyleipzig@gmail.com</a>
      </div>
    </div>
  </div>


  )
}
