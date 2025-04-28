"use client";

import Button from '@/components/button/button';
import styles from './about.module.css';
import Image from 'next/image';

export default function CarbonPage() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Kaj so Obseg 1, Obseg 2 in Obseg 3? | Razlaga emisij ogljika</h1>
          <div className={styles.line}></div>
          <div className={styles.btnAbout}>
            <Button />
          </div>
          <Image src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/img/resource2.jpg`} alt="Omnibus" width={1086} height={717} />
        </div>

        <div className={styles.article}>
          <div className={styles.paragraph}>
            <p className={styles.paragraphText}>Pri pripravi poenostavljenega poročila o energiji in ogljiku (SECR) so emisije po Protokolu GHG opredeljene v različnih obsegih – Obseg 1, Obseg 2 in Obseg 3. Ti obsegi zajemajo različno vrsto podatkov in se med seboj razlikujejo, tako glede tega, ali so pod nadzorom podjetja, kot glede tega, ali izvirajo iz njegove vrednostne verige.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Trenutno stanje poročanja po SECR – nove spremembe za Obseg 3
            </p>
            <p className={styles.paragraphText}>Trenutno je poročanje o Obsegu 1 in 2 v Združenem kraljestvu obvezno, medtem ko je poročanje o Obsegu 3 prostovoljno. Vendar se obetajo spremembe: od decembra 2023 je Ministrstvo za energetsko varnost in ničelne neto emisije sprožilo Poziv k dokazom, ki lahko spremeni ta prostovoljni status.</p>
            <p className={styles.paragraphText}>Zato je smiselno razumeti, katere vrste podatkov spadajo v posamezne obsege in kako jih bo vaše podjetje zbiralo. Znano je, da Obseg 3 zahteva več vložka, upravljanja in časa, saj izhaja iz vrednostne verige in ne iz notranjih procesov. Priporočamo, da začnete z zbiranjem podatkov za Obseg 3 čim prej.</p>
          </div>

          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Kaj so emisije Obsega 1? | Neposredne emisije GHG 
            </p>
            <p className={styles.paragraphText}>Obseg 1 pri poenostavljenem poročanju o energiji in ogljiku zajema neposredne emisije toplogrednih plinov, ki jih podjetje ustvarja z lastnimi dejavnostmi in operacijami, vključno z izgorevanjem goriv na lokaciji ter emisijami iz industrijskih procesov (npr. kotli, vozila). Skupaj z Obsegom 2 so to najbolj nadzorovane emisije v okviru podjetja.</p>
            <p className={styles.paragraphText}>Z razumevanjem in obvladovanjem emisij Obsega 1 lahko podjetja ne le izpolnijo regulativne zahteve, temveč uvedejo tudi strategije za zmanjšanje svojega okoljskega odtisa, kar prispeva k bolj trajnostnemu in odgovornemu poslovnemu modelu.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
            Kaj so emisije Obsega 2? | Posredne emisije
            </p>
            <p className={styles.paragraphText}>Obseg 2 zajema emisije, ki jih podjetje povzroči posredno – npr. porabo kupljene električne energije. Te emisije nastanejo zaradi dejavnosti podjetja, vendar so vir emisij zunaj njegovega neposrednega nadzora. Najpogostejša vrsta emisij Obsega 2 je elektrika, kupljena za lastno rabo iz omrežja ali pri tretjih ponudnikih. Podjetja običajno razpolagajo z izvorno dokumentacijo, ki jo potrebujejo za pretvorbo nakupa plina in elektrike v merilo ton toplogrednih plinov; te podatke najdemo v oddelkih za nabavo, finance, upravljanje objektov ali v službi za trajnostni razvoj.</p>
            <p className={styles.paragraphText}>Primeri emisij Obsega 2. Emisije Obsega 2 nastanejo iz virov, kot so: Elektrika, Para (npr. v kotlovnici), Ogrevanje in hlajenje (sistemi HVAC).</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Kaj so emisije Obsega 3? | Druge posredne emisije
            </p>
            <p className={styles.paragraphText}>Obseg 3 pogosto predstavlja največji delež skupnega ogljičnega odtisa podjetja (do 70 %), a je hkrati najzahtevnejši za poročanje, saj izhaja iz virov, povezanih z vrednostno verigo podjetja, ne pa iz njegovih notranjih procesov.</p>
            <p className={styles.paragraphText}>Ta obseg zajema vse druge posredne emisije, ki se zgodijo v vrednostni verigi podjetja, in delimo jih na emisije, povezane z dobavitelji (upstream), ter emisije, povezane s prodanimi izdelki ali storitvami (downstream). Status prostovoljnega poročanja Obsega 3 je po decembrskem Pozivu k dokazom še vedno v obravnavi, zato je ključno razumeti, kaj spada vanj.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Uporaba tehnologije za lažje SECR poročanje
            </p>
            <p className={styles.paragraphText}>Priprava poročil o emisijah toplogrednih plinov zahteva veliko časa, sredstev in denarja. Naša platforma, podprta z umetno inteligenco, pomaga pri pravočasni pripravi poročil in ustvarjanju načrtov za prihodnje zmanjševanje emisij, tako da lahko načrtujete ukrepe še pred začetkom novega davčnega leta. Ročno poročanje je preteklost, zlasti ko se bliža rok za Obseg 3.</p>
            <p className={styles.paragraphText}>Za brezplačno svetovanje rezervirajte termin z našo ekipo in odkrijte, kako lahko spremenimo način izdelave vaših poročil o emisijah.</p>
          </div>
        </div>
      </div>
    </div>
  );
}