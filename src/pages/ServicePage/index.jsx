import React from 'react'
import s from './index.module.css'
import { behandlung } from '../../data/behandlung'

export default function ServicePage() {
  return (
    <div className={s.main_container}>
        <div>
          <h2> Behandlung</h2>
          <div className={s.card_container}>
            {behandlung.map(({ id, title, description, image }) => (
              <div key={id} className={s.card}>
                <div className={s.cardImage}>
                  <img src={image} alt={title} />
                </div>
                <div className={s.cardContent}>
                  <h2 className={s.cardTitle}>{title}</h2>
                  <p className={s.cardDescription}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
