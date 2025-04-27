'use client';

import FAQ from '@/components/faq/faq';
import styles from './platform.module.css';
import Image from 'next/image';
import { useState } from 'react';

const cardsInfo = [
  {
    title: "Avtomatizirani podatki",
    subtitle: "Brezhibna integracija, takojšnji vpogledi.",
    description:
      "Climatise samodejno zbira in vnese podatke o emisijah iz več virov. Preprosto povežite svoje sisteme in pustite naši platformi, da opravi preostalo delo. Poslovite se od ročnega vnosa podatkov in pozdravite poenostavljen proces z ažurnimi posodobitvami in natančnostjo.",
    img: "/platform/automatedData.png"
  },
  {
    title: "Izračun in vizualizacija",
    subtitle: "Ustvarite natančne izračune ogljičnega odtisa in vizualne nadzorne plošče za uporabne vpoglede.",
    description:
      "Z našimi robustnimi algoritmi zlahka izračunajte ogljični odtis vaše organizacije. Climatise preoblikuje surove podatke v vizualno privlačne nadzorne plošče in poročila, kar vam omogoča jasno razumevanje vašega vpliva in trendov. Sprejemajte informirane odločitve, ki temeljijo na natančnih izračunih.",
    img: "/platform/calculation.png"
  },
  {
    title: "Zmanjševanje na podlagi podatkov",
    subtitle: "Uporabne poti za zmanjšanje emisij.",
    description:
      "Climatise presega zgolj poročanje, saj nudi prilagojene vpoglede in priporočila za zmanjševanje emisij. Prepoznajte ključne priložnosti za zmanjšanje, določite merljive cilje in samozavestno spremljajte svoj napredek pri doseganju trajnostnih ciljev.",
    img: "/platform/dataDrivenReduction.png"
  },
  {
    title: "Sodelovanje z dobavitelji",
    subtitle: "Sodelujte z dobavitelji za večji učinek.",
    description:
      "Sodelujte z dobavitelji neposredno prek Climatise, da spremljate in izboljšate njihove trajnostne pobude. Naša platforma omogoča učinkovito komunikacijo, izmenjavo podatkov in skupno načrtovanje, kar spodbuja preglednost v dobavni verigi in zmanjšanje emisij.",
    img: "/platform/supplierEngagement.png"
  },
  {
    title: "Poročanje z enim klikom",
    subtitle: "Celovita poročila, takoj.",
    description:
      "Ustvarite popolna in skladna trajnostna poročila z enim klikom. Climatise avtomatizira zbiranje podatkov, izračune in oblikovanje, kar vam prihrani čas in trud. Od GHG inventarjev do regulatornih razkritij je poročanje enostavno in brez stresa.",
    img: "/platform/oneClickReporting.png"
  },
  {
    title: "Interakcija z naravnim jezikom",
    subtitle: "Vprašajte, analizirajte, ukrepajte – vse z besedami.",
    description:
      "Poenostavite zapletene procese z našim vmesnikom v naravnem jeziku, podprtim z umetno inteligenco. Postavljajte vprašanja o podatkih o emisijah ali poročilih v preprostem jeziku in prejmite jasne, uporabne odgovore. Upravljanje trajnosti še nikoli ni bilo tako intuitivno.",
    img: "/platform/naturalLanguageInteraction.png"
  },
];



export default function PlatformPage() {
  const [selectedCard, setSelectedCard] = useState<typeof cardsInfo[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (card: typeof cardsInfo[0]) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section className={styles.platform}>
      <h1 className={styles.header}>Platform</h1>

      <div className={styles.cards}>
        {cardsInfo.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <h3 className={styles.cardSubtitle}>{item.subtitle}</h3>
            <button 
              className={styles.cardButton} 
              onClick={() => openPopup(item)}
            >
              Izvedite več
            </button>
          </div>
        ))}
      </div>

      <FAQ />

      {isPopupOpen && selectedCard && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              ×
            </button>
            <h2 className={styles.popupTitle}>{selectedCard.title}</h2>
            <div className={styles.popupContent}>
              <div className={styles.popupImageContainer}>
                <Image 
                  src={selectedCard.img} 
                  alt={selectedCard.title}
                  className={styles.popupImage}
                  width={500}
                  height={300}
                />
              </div>
              <p className={styles.popupDescription}>{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}