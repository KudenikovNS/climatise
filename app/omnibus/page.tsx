import Button from '@/components/button/button';
import styles from './about.module.css';
import Image from 'next/image';

export default function OmnibusPage() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>The Omnibus Simplification to CSRD: A Step Forward or a Step Back?</h1>
          <div></div>
          <Button />
          <Image src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/img/resource1.jpg`} alt="Omnibus" width={1086} height={717} />
        </div>

        <div className={styles.article}>
          <h1 className={`${styles.title} ${styles.paragraphTitleMain}`}>The Omnibus Simplification to CSRD: A Step Forward or a Step Back?</h1>
          <p className={styles.paragraphText}>Ko se podjetja in oblikovalci politik po vsej Evropski uniji soočajo z nenehno spreminjajočim se okvirom okoljskih, družbenih in upravljavskih (ESG) predpisov, je predlagana Omnibus poenostavitev Direktive o korporativnem poročanju o trajnostnem razvoju (CSRD) sprožila strastne razprave. Obljubljena kot panaceja za zapletene zahteve skladnosti, je ta zakonodajna prenova razdelila podjetja in deležnike. Je Omnibus poenostavitev res jasnost, ki jo industrija potrebuje, ali tvegа, da bo omajala cilje, za katere je bila zasnovana?</p>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Razumevanje Omnibus poenostavitve
            </p>
            <p className={styles.paragraphText}>
              Omnibus poenostavitev si prizadeva konsolidirati in poenostaviti obveznosti poročanja v okviru CSRD ter tako podjetjem olajšati izpolnjevanje evropskega trajnostnega dnevnega reda. Z zmanjšanjem administrativnih bremen in standardizacijo zahtevatelji zagovarjajo, da bo ta pobuda povečala učinkovitost poročanja in spodbujala večjo primerljivost med podjetji. </p>
            <p className={styles.paragraphText}>Direktiva že zahteva obsežna razkritja o okoljskih vplivih, družbenih politikah in upravljavskih praksah ter usklajenost z Evropskimi standardi poročanja o trajnostnem razvoju (ESRS). Vendar so številne organizacije kritizirale kompleksnost okvira in finančne breme skladnosti, zlasti za mala in srednje velika podjetja (MSP). Omnibus želi nasloviti te pomislek.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitleMain}>
              Stališča industrije in politike
            </p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitleMain}>
              Poenostavitev za napredek
            </p>
            <p className={styles.paragraphText}>Zagovorniki Omnibus poenostavitve trdijo, da najdejo pravo ravnovesje med ambicijami in pragmatizmom. Skupna izjava ministrov financ EU je izrazila “močno podporo” tej pobudi in poudarila njen potencial, da bo poročanje o ESG bolj dostopno in uporabno za podjetja. Poenostavitev standardov poročanja lahko zmanjša podvajanje in spodbudi učinkovitejšo dodeljevanje virov, kar organizacijam omogoča, da se osredotočijo na dejanske trajnostne rezultate.</p>
            <p className={styles.paragraphText}>Z vidika Climatise je tehnologija ključna. Avtomatizirane platforme lahko integrirajo usklajene zahteve poročanja, zagotavljajo skladnost in hkrati omogočajo vpoglede za zmanjšanje okoljskega odtisa. Na konkurenčnem trgu lahko preprostost organizacijam pomaga preiti iz same skladnosti v vodilne vloge na področju trajnostnega razvoja.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Kompromis na področju vsebine?
            </p>
            <p className={styles.paragraphText}>Kljub obljubam se je Omnibus poenostavitev srečala z velikim odporom vodilnih korporacij in zagovorniških skupin. Kritiki trdijo, da v prizadevanju za preprostost direktiva tvegа, da bo razredčila globino in obseg zahtevanih razkritij, zlasti glede emisij Skopa 3 in odgovornosti v dobavni verigi. Rastoča koalicija velikih podjetij je izrazila pomisleke, da bi zmanjšani standardi poročanja lahko ogrozili preglednost in primerljivost. Po poročilu revije Sustainability Magazine bi to razredčenje lahko spodkopalo zaupanje med vlagatelji in deležniki, ki se opirajo na robustne, standardizirane podatke za oceno trajnostne uspešnosti podjetij.</p>
            <p className={styles.paragraphText}>Poenostavitev ne sme pomeniti pretirane poenostavitve. Zmanjšanje kompleksnosti je ključnega pomena, vendar ne na račun integritete. Moč CSRD je v celostnem pristopu k trajnostnemu razvoju; vsako dejanje, ki to spodkopava, bi lahko zavleklo napredek pri reševanju podnebnih sprememb in spodbujanju odgovornosti.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitleMain}>
              Priložnosti in tveganja
            </p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Zniževanje ovir za MSP
            </p>
            <p className={styles.paragraphText}>Poenostavitev bi lahko pomenila prelomnico za manjša podjetja, ki nimajo virov velikih multinacionalk. S ponujanjem faznih rok in poenostavljenih postopkov Omnibus znižuje vstopne ovire za MSP, kar jim omogoča, da se dejavno vključijo v trajnostni dnevni red.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Nedoslednosti pri uveljavljanju
            </p>
            <p className={styles.paragraphText}>Vendar je usklajevanje lažje reči kot narediti. Kot navaja Hogan Lovells, razhajanja v tem, kako države članice razumejo in uveljavljajo poenostavljena pravila, lahko vodijo do „mozaika“ zahtev za skladnost, kar bi podrlo namen direktive.</p>
            <p className={styles.paragraphText}>Climatise poudarja vlogo napredne tehnologije pri zmanjševanju teh tveganj. Avtomatizirane rešitve se lahko prilagajajo spreminjajočim se standardom in jurisdikcijskim odtenkom, s čimer zagotavljajo, da so podjetja agilna in skladna v razdrobljenem regulativnem okolju.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Spodbujanje inovacij
            </p>
            <p className={styles.paragraphText}>Z jasnejšimi smernicami in zmanjšano kompleksnostjo bi podjetja imela več prostora za vlaganje v trajnostne inovacije. Od sledenja emisijam do rešitev za energetsko učinkovitost bi Omnibus lahko sprožil val ustvarjalnosti, saj podjetja prehajajo iz pasivne skladnosti v proaktivno trajnostno voditeljstvo.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitleMain}>
              Uravnotežen pristop
            </p>
            <p className={styles.paragraphText}>Za Climatise Omnibus poenostavitev predstavlja tako priložnost kot izziv. Priložnost, da zagovarjamo tehnološko vodenе rešitve, ki omogočajo skladnost in hkrati spodbujajo resničen okoljski učinek. Izziv pa je zagotoviti, da poenostavitev ne omaje temeljnih načel preglednosti in odgovornosti. Ko oblikovalci politik dokončujejo podrobnosti, je nujno ohranjati širšo sliko. Poročanje o trajnostnem razvoju ni cilj samo po sebi; je sredstvo za doseganje resničnih sprememb. Poenostavitev mora služiti temu namenu, ne pa mu nasprotovati.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitleMain}>
              Perspektiva Climatise
            </p>
            <p className={styles.paragraphText}>Omnibus poenostavitev je drzen poskus nasloviti utemeljene kritike CSRD. A njen uspeh bo odvisen od skrbne izvedbe, robustne tehnološke integracije in neomajne predanosti preglednosti. Za podjetja, ki se spopadajo s tem spreminjajočim se regulativnim okoljem, je sporočilo jasno: prilagodite se, inovirajte in ostanite zvesti načelom trajnostnega razvoja.</p>
            <p className={styles.paragraphText}>V Climatise smo zavezani, da podjetjem pomagamo spremeniti regulatorne izzive v priložnosti. Z našimi celovitimi rešitvami za poročanje o emisijah omogočamo organizacijam, da poenostavijo skladnost, pridobijo uporabne vpoglede in vodijo pot v trajnostnem razvoju. Prihodnost poročanja o ESG je preprostejša — a mora biti tudi pametnejša. Zgradimo jo skupaj.</p>
          </div>
        </div>
      </div>
    </div>
  );
}