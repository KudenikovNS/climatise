import styles from './problem.module.css';

export default function Problem() {
  const steps = [
    { number: '01', text: 'Čas, porabljen za ročno zbiranje podatkov' },
    { number: '02', text: 'Združevanje podatkov iz več virov, deležnikov in različnih formatov' },
    { number: '03', text: 'Preverjanje točnosti in kontinuitete vaših podatkov' },
    { number: '04', text: 'Poročanje po več okvirih z nenehno spreminjajočimi se zahtevami' },
    { number: '05', text: 'Izračun ogljičnega odtisa ročno ali prek svetovalnih storitev' },
    { number: '06', text: 'Poskušanje kvantificirati in doseči dejanske zmanjšave' },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Težava</h3>

        <h2 className={styles.title}>
          Ali je vaš trenutni postopek videti kaj podobno temu?
        </h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.content}>
                <div className={styles.circle}></div>
                <p className={styles.number}>{step.number}</p>
                <div className={styles.arrow}></div>
              </div>
              <p className={styles.text}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p className={styles.helpText}>
          Če je temu tako, vam lahko pomagamo ↓
        </p>
      </div>
    </section>
  );
}