import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  
    const [analyticsEnabled, setAnalyticsEnabled] = useState(Cookies.get('analyticsAccepted') === 'true');
    const [marketingEnabled, setMarketingEnabled] = useState(Cookies.get('marketingAccepted') === 'true');

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
    <div>
        <CookieConsent
            location="bottom"
            buttonText="Alle akzeptieren"
            declineButtonText="Nur notwendige akzeptieren"
            enableDeclineButton
            onAccept={handleAcceptAll}
            onDecline={handleAcceptNecessary}
            >
            Diese Website verwendet Cookies, um sicherzustellen, dass Sie die
            beste Erfahrung auf unserer Website erhalten.{" "}
            <Link to="/datenschutz" style={{ color: '#fff', textDecoration: 'underline' }}>
                Mehr erfahren
            </Link>.
        </CookieConsent>
    </div>
  )
}
