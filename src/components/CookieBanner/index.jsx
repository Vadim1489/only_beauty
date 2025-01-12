import React, { useEffect, useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import s from './index.module.css'

export default function CookieBanner() {
  
    const [analyticsEnabled, setAnalyticsEnabled] = useState(Cookies.get('analyticsAccepted') === 'true');
    const [marketingEnabled, setMarketingEnabled] = useState(Cookies.get('marketingAccepted') === 'true');

    useEffect(() => {
        // Сброс состояния при загрузке, если cookies не установлены
        const necessaryAccepted = Cookies.get('necessaryAccepted');
        if (!necessaryAccepted) {
          setAnalyticsEnabled(false);
          setMarketingEnabled(false);
        }
      }, []);

    const handleAcceptAll = () => {
        Cookies.set('necessaryAccepted', 'true', { expires: 365 });
        Cookies.set('analyticsAccepted', 'true', { expires: 365 });
        Cookies.set('marketingAccepted', 'true', { expires: 365 });
        setAnalyticsEnabled(true);
        setMarketingEnabled(true);
        // Инициализация аналитики и маркетинга
    };

    const handleAcceptNecessary = () => {
        Cookies.set('necessaryAccepted', 'true', { expires: 365 });
        Cookies.set('analyticsAccepted', 'false', { expires: 365 });
        Cookies.set('marketingAccepted', 'false', { expires: 365 });
        setAnalyticsEnabled(false);
        setMarketingEnabled(false);
        // Отключение аналитики и маркетинга
     };
  
    return (
        <div className={s.container}>
        <CookieConsent
            location="bottom"
            buttonText="Alle akzeptieren"
            declineButtonText="Nur notwendige akzeptieren"
            enableDeclineButton
            onAccept={handleAcceptAll}
            onDecline={handleAcceptNecessary}
            buttonClasses={`${s.cookieButton} ${s.acceptButton}`}
            declineButtonClasses={`${s.cookieButton} ${s.declineButton}`}
            containerClasses={s.container}
            contentClasses={s.cookieContent}
            >
            Diese Website verwendet Cookies, um sicherzustellen, dass Sie die
            beste Erfahrung auf unserer Website erhalten.
            <Link to="/datenschutz" className={s.cookieLink}>
                Mehr erfahren
            </Link>.
        </CookieConsent>
        </div>
  )
}
