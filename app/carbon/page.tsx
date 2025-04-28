"use client";

import Button from '@/components/button/button';
import styles from './about.module.css';
import Image from 'next/image';

export default function CarbonPage() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Poročanje o obsegu 3: Neizogiben pogoj za trajnostni uspeh</h1>
          <div className={styles.line}></div>
          <div className={styles.btnAbout}>
            <Button />
          </div>
          <Image src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/img/resource3.jpg`} alt="Omnibus" width={1086} height={717} />
        </div>

        <div className={styles.article}>
          <div className={styles.paragraph}>
            <p className={styles.paragraphText}>Ker podjetja vse bolj dajo prednost trajnostnemu razvoju ob vse večjem pritisku podnebnih sprememb in vedno strožji regulativi emisij, ki jo spodbujajo nacionalni in nadnacionalni cilji ničelnih neto emisij, se je poročanje o emisijah obsega 3 prelevilo iz vizionarske pobude v nujno poslovno prakso. Emisije obsega 3, posredne emisije, ki nastanejo v celotni vrednostni verigi, običajno predstavljajo največji delež ogljičnega odtisa podjetja. Ob vse večjem poudarku na preglednosti in odgovornosti pri poročanju o emisijah si podjetja ne morejo več privoščiti ignoriranja emisij obsega 3.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
              Naraščajoče zahteve regulatorjev in vlagateljev
            </p>
            <p className={styles.paragraphText}>Regulatorni organi in vlagatelji spodbujajo prehod k celovitim razkritjem trajnosti. Direktiva EU o korporativnem poročanju o trajnosti (CSRD), Mednarodni odbor za standarde trajnostnega razvoja (ISSB) in druge globalne podnebno usmerjene uredbe postavljajo nove standarde za korporativno poročanje. V tem okolju velja za ‘najboljšo prakso’, da podjetja poročajo ne le o neposrednih emisijah (obseg 1 in 2), temveč tudi o celotnem okoljskem vplivu, vključno z emisijami obsega 3.</p>
            <p className={styles.paragraphText}>Vlagatelji vse bolj pozornost usmerjajo v to, kako podjetja obvladujejo podnebna tveganja v svojih dobavnih verigah. Od leta 2017 vlagatelji uporabljajo okvir TCFD (Task Force on Climate-Related Financial Disclosures) za oceno izpostavljenosti podnebnim tveganjem, številne jurisdikcije pa so sprejele njegova priporočila (PRI, 2024). Če podjetja ne upoštevajo in ne poročajo o emisijah obsega 3, lahko to oslabi zaupanje vlagateljev, vpliva na dostop do kapitala in spremeni njihov položaj na trgu.</p>
            <p className={styles.paragraphText}>Tržni pritisk ni le teoretičen: po raziskavi iz leta 2024 bi 34 % potrošnikov bolj zaupalo blagovnim znamkam, če bi jih neodvisna tretja oseba potrdila kot etične ali trajnostne (Deloitte, 2023), potrošniški trendi pa močno vplivajo na razpoloženje vlagateljev. Študija Battiston et al. (2024) je pokazala, da trenutne ocene podnebnih tveganj pogosto podcenjujejo potencialne izgube celo do 70 % zaradi uporabe neustreznih podatkov. To poudarja nujnost podrobnega in preglednega poročanja emisij obsega 3.</p>
          </div>

          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
            Pridobivanje konkurenčne prednosti z obvladovanjem podnebnih tveganj 
            </p>
            <p className={styles.paragraphText}>Osredotočanje na emisije obsega 3 ni le izpolnjevanje zahtev, ampak tudi pridobivanje konkurenčne prednosti. Potrošniki vedno pogosteje izbirajo blagovne znamke s trdno zavezo k trajnostnemu razvoju. Raziskava iz leta 2024 je pokazala, da so potrošniki pripravljeni za trajnostne izdelke plačati 9,7 % premije, kljub skrbi glede življenjskih stroškov in inflacije (PwC, 2024). Natančno poročanje in proaktivno ukrepanje pri emisijah obsega 3 naredi trajnostni položaj podjetja otipljiv in omogoča razlikovanje s svojo zavezanostjo preseganju minimalnih regulativnih zahtev.</p>
            <p className={styles.paragraphText}>Razumevanje emisij obsega 3 podjetjem omogoča tudi prepoznavanje tveganj in priložnosti v dobavni verigi. Učinki podnebnih sprememb – od pomanjkanja surovin do motenj v logistiki – lahko močno vplivajo na poslovanje. S proaktivnim obvladovanjem teh tveganj lahko podjetja povečajo svojo odpornost ter zagotovijo dolgoročno trajnost in kontinuiteto poslovanja.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>
            Izkoristek tehnologije za natančno in učinkovito poročanje o emisijah
            </p>
            <p className={styles.paragraphText}>Izračun emisij obsega 3 je lahko zapleten, saj zahteva podatke iz več virov in različnih formatov. Zato so napredne programske rešitve nepogrešljive. Prava tehnologija lahko poenostavi zbiranje podatkov, analizo in poročanje ter zagotovi natančno in učinkovito sledenje emisijam obsega 3. To ne le poenostavi skladnost, ampak tudi sprosti vire, kar podjetjem omogoča osredotočenje na dejanske ukrepe za zmanjšanje okoljskega vpliva.</p>
            <p className={styles.paragraphText}>Poleg tega ima tehnologija ključno vlogo pri gradnji zaupanja potrošnikov. V Združenem kraljestvu 57 % potrošnikov meni, da podjetja prikrivajo informacije o svojem okoljskem vplivu (Demos, 2024). Z uporabo tehnologije za povečanje preglednosti lahko podjetja odpravijo potrošniški skepticizem in utrdijo svojo zavezanost trajnostnemu razvoju.</p>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.paragraphTitle}>Nova obveznost: zakaj je poročanje o obsegu 3 ključno za prihodnji uspeh</p>
            <p className={styles.paragraphText}>Čeprav poročanje o emisijah obsega 3 še ni pravno obvezno, vse bolj postaja dejanski standard za podjetja, ki želijo biti resnično trajnostna – ne le z vidika okolja, ampak tudi odpornosti in dolgoročne uspešnosti. Ob naraščajočem regulatornem pritisku, višjih pričakovanjih vlagateljev in zahtevah potrošnikov po večji transparentnosti morajo podjetja dati prednost celovitemu poročanju o emisijah, da ostanejo konkurenčna. Z vključitvijo tehnologije in proaktivnim upravljanjem emisij obsega 3 se bodo podjetja pripravila na dolgoročni uspeh v svetu, vse bolj usmerjenem v trajnost.</p>
          </div>
        </div>
      </div>
    </div>
  );
}