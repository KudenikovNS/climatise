"use client";

import { useState } from 'react';
import styles from './faq.module.css';

interface FaqItemProps {
  question: string;
  answer: string;
  answer1?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, answer1 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <div className={styles.iconWrapper}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{answer}</p>
          {answer1 && <p>{answer1}</p>}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'Kaj je Climatise?',
      answer: 'Climatise je inovativna platforma, namenjena podjetjem za sledenje, zmanjševanje in poročanje o ogljičnem odtisu. Ponujamo orodja in vpoglede za enostavno in učinkovito izvajanje trajnostnih praks.'
    },
    {
      question: 'Kako mi Climatise pomaga zmanjšati ogljični odtis?',
      answer: 'Climatise ponuja personalizirana priporočila na podlagi vaših aktivnosti in poslovnih podatkov. Z analizo podatkov predlagamo praktične spremembe in trajnostne alternative za zmanjšanje okoljskega vpliva.'
    },
    {
      question: 'Kako natančen je Climatise?',
      answer: 'Climatise uporablja najnovejše podatke in metodologije za zagotavljanje natančnosti. Neprestano posodabljamo naše algoritme in baze podatkov, da odražajo najbolj aktualne informacije, vse v skladu s Protokolom GHG.'
    },
    {
      question: 'Kako lahko sledim svojemu napredku?',
      answer: 'Climatise ima napreden sistem sledenja, ki vizualno prikazuje vaše prizadevanje za zmanjšanje skozi čas. Nastavite cilje, spremljajte dosežke in prejemajte redne posodobitve o vašem vplivu na okolje.'
    },
    {
      question: 'Ali so moji podatki varni pri Climatise?',
      answer: 'Climatise ima napreden sistem sledenja, ki vizualno prikazuje vaše prizadevanje za zmanjšanje skozi čas. Nastavite cilje, spremljajte dosežke in prejemajte redne posodobitve o vašem vplivu na okolje.'
    },
    {
      question: 'Kaj loči Climatise od drugih platform za trajnost?',
      answer: 'Climatise poenostavlja poročanje o trajnosti s preciznostjo in enostavnostjo. Naša platforma združuje natančno merjenje, prilagojene akcijske načrte in avtomatizirano generiranje poročil. Preprosto naložite surove poslovne podatke — mi poskrbimo za ostalo. Konec ročnih procesov, rigidnih predlog in izgubljanja časa.'
    }
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Pogosta vprašanja</h2>
      <div className={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export { FaqItem };
export default FAQ;