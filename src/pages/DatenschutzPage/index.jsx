import React from 'react'
import s from './index.module.css'

export default function DatenschutzPage() {
  return (

    <div className={s.privacyPolicy}>
      <h2>Datenschutzerklärung</h2>

      <section>
        <h3>1. Einleitung</h3>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section>
        <h3>2. Verantwortlicher</h3>
        <address>
          <p>Larissa Nitz</p>
          <p>Lößniger Str. 15, 04275 Leipzig</p>
          <p>Email: <a href="mailto:onlybeautyleipzig@gmail.com">onlybeautyleipzig@gmail.com</a></p>
          <p>Telefon: <a href="tel:015170128870">015170128870</a></p>
        </address>
      </section>

      <section>
        <h3>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</h3>

        <h3>3.1. Beim Besuch der Website</h3>
        <p>
          Beim Aufrufen unserer Website werden automatisch Informationen erfasst, die Ihr Browser
          an unseren Server übermittelt. Dazu gehören:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
          <li>Inhalt der Anforderung (konkrete Seite)</li>
          <li>Zugriffsstatus/HTTP-Statuscode</li>
          <li>Jeweils übertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Browsertyp und -version sowie Sprache und Version der Browsersoftware</li>
        </ul>
        <p>
          Diese Daten werden benötigt, um einen reibungslosen Verbindungsaufbau der Website zu gewährleisten und die Systemsicherheit zu gewährleisten.
        </p>

        <h3>3.2. Kontaktformular</h3>
        <p>
          Wenn Sie uns über ein Kontaktformular oder per E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
        </p>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
      </section>

      <section>
        <h3>4. Cookies</h3>
        <p>
          Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Cookies richten keinen Schaden an und enthalten keine Viren.
        </p>
        <ul>
          <li><strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich.</li>
          <li><strong>Statistik-Cookies:</strong> Mit Ihrer Zustimmung nutzen wir Cookies, um das Nutzerverhalten anonymisiert auszuwerten.</li>
        </ul>
        <p>Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser ändern.</p>
      </section>

      <section>
        <h3>5. Analyse-Tools und Tools von Drittanbietern</h3>

        <h3>5.1. Google Analytics</h3>
        <p>
          Diese Website nutzt den Webanalysedienst Google Analytics. Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Google Analytics verwendet Cookies, die eine Analyse Ihrer Benutzung der Website ermöglichen. Die durch Cookies erzeugten Informationen werden an einen Server von Google in den USA übertragen und dort gespeichert.
        </p>
        <p><strong>Rechtsgrundlage:</strong> Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO</p>

        <h3>5.2. Google Maps</h3>
        <p>
          Zur Darstellung von Karteninhalten verwenden wir Google Maps. Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unseres Online-Angebots.
        </p>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
      </section>

      <section>
        <h3>6. Weitergabe von Daten an Dritte</h3>
        <p>Eine Weitergabe Ihrer persönlichen Daten an Dritte erfolgt nur, wenn:</p>
        <ul>
          <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
          <li>die Verarbeitung zur Erfüllung eines Vertrags erforderlich ist,</li>
          <li>eine rechtliche Verpflichtung besteht, oder</li>
          <li>die Weitergabe zur Wahrung berechtigter Interessen erforderlich ist.</li>
        </ul>
      </section>

      <section>
        <h3>7. Ihre Rechte</h3>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO),</li>
          <li>unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO),</li>
          <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),</li>
          <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),</li>
          <li>Ihre Einwilligung zur Datenverarbeitung zu widerrufen (Art. 7 Abs. 3 DSGVO),</li>
          <li>eine Beschwerde bei einer Aufsichtsbehörde einzureichen (Art. 77 DSGVO).</li>
        </ul>
      </section>

      <section>
        <h3>8. Dauer der Datenspeicherung</h3>
        <p>
          Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
        </p>
      </section>

      <section>
        <h3>9. Datensicherheit</h3>
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unberechtigte Zugriffe zu schützen.
        </p>
      </section>

      <section>
        <h3>10. Änderungen dieser Datenschutzerklärung</h3>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um den aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienstleistungen umzusetzen.
        </p>
      </section>
    </div>

  )
}
