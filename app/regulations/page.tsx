"use client";

import styles from './regulations.module.css';
import { useState, useEffect, useRef } from 'react';
import { FaqItem } from '@/components/faq/faq';

const regulationsItems = [
  {
    question: '01. Poenostavljeno poročanje o energiji in ogljiku (SECR)',
    answer: 'SECR zahteva od britanskih podjetij, da poročajo o porabi energije in emisijah ogljika.',
    answer1: 'Climatise ta proces revolucionira s popolnoma avtomatiziranim potekom dela, ki v trenutku ustvari letno poročilo SECR, pripravljeno za oddajo in revizijo.'
  },
  {
    question: '02. Mednarodni svet za standarde trajnostnega razvoja (ISSB)',
    answer: 'ISSB postavlja globalne standarde za finančna razkritja, povezana s trajnostnim razvojem. Climatise nudi celovito podporo za poročanje po ISSB, kar omogoča nemoteno vključevanje informacij o trajnostnem razvoju v vaše finančno poročanje.',
    answer1: 'Naša platforma zagotavlja, da ste vedno usklajeni z najnovejšimi zahtevami ISSB, s čimer deležnikom nudite zahtevano preglednost.'
  },
  {
    question: '03. Direktiva o korporativnem poročanju o trajnostnem razvoju (CSRD)',
    answer: 'CSRD razširja zahteve za poročanje o trajnostnem razvoju pri podjetjih v EU.',
    answer1: 'Climatise poenostavlja zbiranje podatkov, tudi za kompleksne zahteve Scope 3, s čimer zagotavlja celovitost podatkov. V nekaj sekundah prejmete natančna poročila, pripravljena na revizijo.'
  },
  {
    question: '04. Britanske zahteve za razkritje trajnostnih informacij (SDR)',
    answer: 'Čeprav so britanske zahteve SDR še v razvoju, je Climatise pripravljen podpreti vaše potrebe po skladnosti takoj, ko bo okvir dokončan.',
    answer1: 'Naša prilagodljiva platforma bo vključila zahteve SDR, s čimer boste vedno korak pred drugimi pri poročanju o trajnostnem razvoju.'
  },
  {
    question: '05. Poročanje ESOS',
    answer: 'ESOS obvezuje velika britanska podjetja k oceni porabe energije in prepoznavanju priložnosti za prihranke.',
    answer1: 'Climatise poenostavlja skladnost z ESOS z avtomatiziranim zbiranjem podatkov in takojšnjimi poročili, pripravljenimi za revizijo, ter pretvarja regulatorne zahteve v uporabne vpoglede za energetsko učinkovitost in prihranke.'
  }
];

export default function RegulationsPage() {
  const text1 = "Samodejno ustvarjajte poročila,";
  const text2 = "ki ustrezajo zahtevnim globalnim";
  const text3 = "okvirjem trajnostnega poročanja";
  
  const [charIndices, setCharIndices] = useState<number[]>([]);
  const [text3CharIndices, setText3CharIndices] = useState<number[]>([]);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalChars = text1.length + text2.length;
    
    const addIndicesWithDelay = (index: number) => {
      if (index > totalChars) return;
      
      setTimeout(() => {
        setCharIndices(prev => [...prev, index]);
        addIndicesWithDelay(index + 1);
      }, 50);
    };
    
    addIndicesWithDelay(0);

    // Обработчик прокрутки для эффекта заполнения синим цветом третьей строки
    const handleScroll = () => {
      if (!text3Ref.current) return;
      
      const windowHeight = window.innerHeight;
      const text3Position = text3Ref.current.getBoundingClientRect().top;
      
      // Если элемент приближается к верхней части экрана при прокрутке
      // заполняем индексы для синего цвета
      const visibility = 1 - (text3Position / windowHeight);
      const clampedVisibility = Math.max(0, Math.min(1, visibility));
      
      // Определяем, сколько символов должно быть синего цвета в зависимости от прокрутки
      const charsToFill = Math.floor(clampedVisibility * text3.length);
      
      // Обновляем индексы для синих символов
      const newIndices = [];
      for (let i = 0; i < charsToFill; i++) {
        newIndices.push(i);
      }
      setText3CharIndices(newIndices);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Вызываем обработчик сразу, чтобы установить начальное состояние
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTextWithColorTransition = (text: string, startIndex: number) => {
    return text.split('').map((char, index) => {
      const globalIndex = startIndex + index;
      return (
        <span
          key={globalIndex}
          className={charIndices.includes(globalIndex) ? styles.coloredChar : styles.grayChar}
        >
          {char}
        </span>
      );
    });
  };
  
  // Функция для рендеринга третьей строки с эффектом заполнения синим цветом
  const renderText3WithScrollEffect = (text: string) => {
    return text.split('').map((char, index) => {
      return (
        <span
          key={index}
          className={text3CharIndices.includes(index) ? styles.blueChar : styles.grayChar}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          <div className={styles.lineWrapper}>
            {renderTextWithColorTransition(text1, 0)}
          </div>
          <div className={styles.lineWrapper}>
            {renderTextWithColorTransition(text2, text1.length)}
          </div>
          <div className={styles.lineWrapper} ref={text3Ref}>
            {renderText3WithScrollEffect(text3)}
          </div>
        </h1>
      </div>

      <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Predpisi</h2>
      <div className={styles.faqContainer}>
        {regulationsItems.map((item, index) => (
          <FaqItem 
            key={index} 
            question={item.question} 
            answer={item.answer}
            answer1={item.answer1} 
          />
        ))}
      </div>
    </section>
    </div>
  );
}
