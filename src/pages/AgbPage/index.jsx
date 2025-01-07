import React from 'react'
import s from './index.module.css'

export default function AgbPage() {
  return (
    <div className={s.container}>
        <h2>Allgemeine Geschäftsbedingungen (AGB) für ONLY BEAUTY by Larissa</h2>
        <ol>
            <li>
                Geltungsbereich Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen, die
                im Kosmetik Salon ONLY BEAUTY by Larissa angeboten werden. Mit der Inanspruchnahme
                unserer Dienstleistungen erkennt der Kunde diese AGB an.
            </li>
            <li>
                Terminvereinbarung Termine sind verbindlich und müssen im Voraus vereinbart werden.
                Änderungen oder Stornierungen sind bis 24 Stunden vor dem Termin kostenfrei möglich. Bei
                späteren Stornierungen oder Nichterscheinen behalten wir uns vor, die vollen Kosten des
                Termins in Rechnung zu stellen.
            </li>
            <li>
                Preise Alle Preise sind in Euro angegeben und verstehen sich inklusive der gesetzlichen
                Mehrwertsteuer. Änderungen der Preise bleiben vorbehalten und werden rechtzeitig bekannt
                gegeben.
            </li>
            <li>
                Bezahlung Die Zahlung erfolgt unmittelbar nach der Dienstleistung in Bar, Rechnungen sind
                sofort fällig.  
            </li>
            <li>
                Haftung Der Kosmetik Salon haftet nicht für Schäden, die durch unsachgemäße Anwendung der
                Produkte oder Dienstleistungen entstehen. Bei Allergien oder gesundheitlichen Problemen muss
                der Kunde vor der Behandlung informieren.
            </li>
            <li>
                Datenschutz Wir verpflichten uns, die Daten unserer Kunden vertraulich zu behandeln und
                ausschließlich im Rahmen der gesetzlichen Bestimmungen zu verwenden.
            </li>
            <li>
                Schlussbestimmungen Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
                Wirksamkeit der übrigen Bestimmungen unberührt. Änderungen der AGB bedürfen der
                Schriftform.
            </li>
            <li>
                Gerichtsstand Gerichtsstand für alle Streitigkeiten ist der Sitz des Kosmetik Salons.
            </li>
        </ol>
    </div>
  )
}
