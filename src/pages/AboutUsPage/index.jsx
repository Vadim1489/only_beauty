import React from 'react'
import larisa_img from './media/Larissa.png'
import Irina_img from './media/Irina.png'
import s from './index.module.css'

export default function AboutUsPage() {
  return (
<div className={s.container}>
  <h2>Unsere Team</h2>
    <div className={s.container_info}>  
      <div className={s.card_container}>
        <img src={larisa_img} alt="larisa_img" />
        <div> 
          <p> Mein Name ist Larissa und ich bin die Gründerin von ONLY
              BEAUTY. <br />
              Schon immer galt meine Leidenschaft der Schönheit, weshalb ich
              während meines Wirtschaftsstudiums verschiedene Fortbildungen
              besucht habe, um meinen Wissensstand in der Beauty Industrie zu
              erweitern. Ich bilde mich ständig im kosmetischen Bereich weiter, um
              immer auf dem neusten Stand zu bleiben.
            </p>
        </div>
      </div>
      <div className={s.card_container}>
        <img src={Irina_img} alt="Irina_img" />
        <div>
          <p>
            Mein Name ist Irina, ich bin Maniküre- und Pediküre-Meisterin mit über zwei Jahren Erfahrung. Ich arbeite mit hochwertigen Materialien, gehe individuell auf jeden Kunden ein und verbessere ständig meine Fähigkeiten. Mein Ziel ist es, Ihre Schönheit zu betonen und durch perfekte Pflege gute Laune zu schaffen.
          </p>
        </div>
      </div>
    </div>
</div>
  )
}
