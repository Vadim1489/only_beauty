import React from 'react'
import larisa_img from './media/Larissa.png'
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
        <img src='https://cdn4.vectorstock.com/i/1000x1000/74/28/logo-nail-master-manicurist-manicure-pedicure-vector-40347428.jpg' alt="Irina_img" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint fugiat dolores<br /> minus excepturi obcaecati sit, iste corrupti quidem, unde doloribus magnam<br /> sed autem aspernatur nihil error aliquid voluptatum at.
          </p>
        </div>
      </div>
    </div>
</div>
  )
}
