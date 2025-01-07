import React from 'react'
import s from './index.module.css'
import { behandlung } from '../../data/behandlung'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (

      <div className={s.main_container}>

          <h2> Behandlung</h2>
          
          <div className={s.card_container}>
            {behandlung.map(({ id, title, description, image }) => (
              <Link to='/preiseliste'>
              <div key={id} className={s.card}>
                <div className={s.cardImage}>
                  <img src={image} alt={title} />
                </div>
                <div className={s.cardContent}>
                  <h2 className={s.cardTitle}>{title}</h2>
                </div>
              </div>
              </Link>
            ))}
          </div>
          

      </div>
  )
}
