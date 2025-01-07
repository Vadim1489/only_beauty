import React from 'react'
import s from './index.module.css'

export default function ImpressumPage() {
  return (

    <div className={s.impressum}>
      <div className={s.impressum_container}> 
        <h3>Impressum</h3>
        <p>Angaben gemäß § 5TMG:</p>
        <h5>ONLY BEAUTY by Larissa</h5>
        <a href='https://maps.app.goo.gl/Px9T8u3oPtezUury5' target='_blank'>Lößniger Straße 15 <br /> 04275, Leipzig </a>
        <h3>Kontakt:</h3>
        <p>Telefon: <a href={`https://wa.me/${+4915170128870}`} target='_blank'> 015170128870</a> Larissa Nitz</p> 
        <p>E-mail: <a href='mailto:onlybeautyleipzig@gmail.com'>onlybeautyleipzig@gmail.com</a></p>
        <h3>Berufsbezeichnung:</h3>
        <p>Kosmetikerin (verliehen in Deutschland) </p>
        <h3>Haftungsausschluss:</h3>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die <br />Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch<br /> keine Gewähr übernehmen.
            Als Dienstanbieter sind wir gemäß § 7 Abs. 1<br />
            TMG für eigene Inhalte auf diesen Seiten verantwortlich. Nach SS 8 bis 10 <br />TMG sind wir
            jedoch nicht verpichtet, übermittelte oder gespeicherte <br />fremde Informationen zu
            überwachen.
        </p>
      </div> 
    </div>
  )
    


}
