import React from 'react'
import s from './index.module.css'
import { FaWhatsapp } from "react-icons/fa";
import inst from './media/inst_logo.svg'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.google_review}>
        <h2>BEWERTEN SIE UNS AUF GOOGLE</h2>
        <div>
          <a href="https://www.google.com/search?q=ONLY%20BEAUTY%20by%20Larissa%20%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDEzMLOwsDQ1MzM0NjMwMDG3NN_AyPiKUdnfzydSwcnVMTQkUiGpUsEnsSizuDhR4cK8i00Xtl_svrDpYvciVmJUAQCAUIYKZwAAAA&rldimm=14606889566136004797&tbm=lcl&hl=de&authuser=1&sa=X&ved=0CBwQ9fQKKABqFwoTCNCX3Zf9-okDFQAAAAAdAAAAABAG&biw=2133&bih=1012&dpr=0.9#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer" className={s.review_button}>JETZT BEWERTEN</a>
        </div>
      </div>
      <div className={s.social}>
        <h6>TERMIN VEREINBAREN </h6>
        <div className={s.social_icons}>
          <a href={`https://wa.me/${+4915170128870}`} target='_blank' rel="noreferrer" id={s.whats}><FaWhatsapp /></a>
          <a href="https://www.instagram.com/onlybeauty.leipzig/profilecard/?igsh=MTY0Ymk1cXlzaTY0Zw%3D%3D" rel="noreferrer" target='_blank' id={s.inst}><img src={inst} alt="logo" /></a>
        </div>
      </div>
      <div className={s.mapContainer}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4986.839487764556!2d12.382003!3d51.321799000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f95539658101%3A0xcab618ab76e570bd!2sONLY%20BEAUTY%20by%20Larissa!5e0!3m2!1sru!2sde!4v1732580156465!5m2!1sde!2sde"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <div className={s.footer_info}>
        <p>Copyright © 2024 ONLY BEAUTY by Larissa.</p>
        <a href="/datenschutz" >Datenschutz</a>
        <a href="/agb">AGB</a>
        <a href="/impressum">Impressum</a>
      </div>
    </div>
  )
}
