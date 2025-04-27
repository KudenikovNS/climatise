"use client";

import styles from './regulations.module.css';
import { useState, useEffect, useRef } from 'react';
import { FaqItem } from '@/components/faq/faq';

const regulationsItems = [
  {
    question: '01. Direktiva o korporativnem poročanju o trajnostnem razvoju (CSRD)',
    answer: 'CSRD uvaja celovite zahteve glede poročanja o trajnostnem razvoju za podjetja v EU.',
    answer1: 'Climatise poenostavlja celoten postopek zbiranja podatkov, tudi za kompleksne zahteve Skopa 3, s čimer zagotavlja popolno pokritost podatkov. V nekaj sekundah ustvarite natančna, pripravljena za revizijo poročila, ki popolnoma ustrezajo evropskim standardom poročanja o trajnostnem razvoju (ESRS).'
  },
  { 
    question: '02. Evropski standardi poročanja o trajnostnem razvoju (ESRS)',
    answer: 'ESRS nudi podroben okvir poročanja znotraj CSRD.',
    answer1: 'Platforma Climatise je popolnoma usklajena z vsemi zahtevami ESRS, kar omogoča nemoteno razkrivanje okoljskih, družbenih in upravljavskih metrik. Naša rešitev samodejno preslika vaše podatke na ustrezna ESRS razkritja, kar poenostavlja skladnost.'
  },
  {
    question: '03. Taksonomija EU',
    answer: 'Taksonomija EU določa merila za okoljsko trajnostne gospodarske dejavnosti.',
    answer1: 'Climatise vam pomaga določiti upravičenost in skladnost s taksonomijo, avtomatizira kompleksne izračune ter ustvarja podrobno dokumentacijo za podporo vašim trditvam o zelenih naložbah in preprečevanje greenwashinga.'
  },
  {
    question: '04. Mednarodni svet za standarde trajnostnega razvoja (ISSB)',
    answer: 'ISSB postavlja globalne standarde za finančna razkritja, povezana s trajnostnim razvojem.',
    answer1: 'Climatise nudi celovito podporo za poročanje po ISSB, kar vam pomaga nemoteno vključiti informacije o trajnostnem razvoju v vaše finančno poročanje. Naša platforma zagotavlja, da ste vedno usklajeni z najnovejšimi zahtevami ISSB, s čimer deležnikom nudite zahtevano preglednost.'
  },
  {
    question: '05. Uredba o razkritju trajnostnih finančnih informacij (SFDR)',
    answer: 'SFDR zahteva, da udeleženci finančnih trgov razkrijejo tveganja in vplive, povezane s trajnostnim razvojem.',
    answer1: 'Climatise poenostavlja skladnost s SFDR z avtomatiziranim zbiranjem podatkov in standardiziranimi predlogami za razkritja, kar vam učinkovito pomaga izpolniti zahteve za poročanje o glavnih negativnih vplivih (PAI).'
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

      <section className={styles.faq}>
      <h2 className={styles.title}>Predpisi</h2>
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
