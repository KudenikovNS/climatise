import Button from '@/components/button/button';
import styles from './about.module.css';


export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.header}>O nas</h1>
        <p className={styles.text}>Climatise je ustanovila ekipa zagovornikov okolja in tehnoloških strokovnjakov, ki so verjeli,
          da za resnične spremembe potrebujemo dostopne in natančne podatke o ogljiku.
        </p>
        <p className={styles.text}>
          Naša zgodba govori o inovacijah in poslanstvu – ustvarjamo rešitve, ki se prilagajajo zahtevam industrije
          in opolnomočajo podjetja na njihovi poti trajnostnega razvoja. Od zgodnjih uporabnikov do podjetij s seznama FTSE 100 prinašamo strokovno znanje za uresničevanje vidnih napredkov.
        </p>

        <Button text="O nas" href="/" className={styles.btnAbout} />
      </div>

      <div className={styles.leadership}>
        <h2 className={styles.headerLeadership}>Vodstvo</h2>
      </div>
    </div>


  );
}