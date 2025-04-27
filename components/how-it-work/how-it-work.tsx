'use client';

import styles from "./how-it-work.module.css";
import Image from "next/image";

export default function HowItWork() {
  const steps = [
    {
      number: 1,
      title: "Naložite svoje podatke",
      description: "Surove podatke naložite v Climatise, brez predlog, brez ročnega oblikovanja – preprosto povlecite in spustite svoje surove poslovne podatke.",
      image: "/img/folder.avif",
      imageFirst: true
    },
    {
      number: 2,
      title: "Izračunajte svoje emisije",
      description: "Climatise takoj izračuna vaše emisije in vam zagotovi pregled nad vašim ogljičnim odtisom v realnem času.",
      image: "/img/diagrams.png",
      imageFirst: false
    },
    {
      number: 3,
      title: "Zmanjšajte svoje emisije",
      description: "Climatise zagotavlja na podatkih temelječe strategije za zmanjšanje emisij za vaše podjetje. Modelirajte, napovedujte in spremljajte napredek glede vaših ciljev.",
      image: "/img/cloud.avif",
      imageFirst: true
    },
    {
      number: 4,
      title: "Poročajte o svojih emisijah",
      description: "Izkoristite Climatiseove avtomatizirane procese poročanja. Od četrtletnih posodobitev do regulativnih zahtev – poročajte o svojih emisijah takoj.",
      image: "/img/stikers.avif",
      imageFirst: false
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kako deluje</h2>

        <div className={styles.track}>
          <div className={styles.camera}>
            <div className={styles.content}>
              {steps.map((step, index) => (
                <div key={index} className={styles.item}>
                  {step.imageFirst ? (
                    <>
                      <Image
                        src={step.image}
                        width={476}
                        height={400}
                        alt={`Step ${step.number}`}
                        className={styles.img}
                        priority
                      />
                      <div className={styles.card}>
                        <div className={styles.number}>{step.number}</div>
                        <div className={styles.wrapperText}>
                          <p className={styles.cardTitle}>{step.title}</p>
                          <p className={styles.cardDesc}>{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.card}>
                        <div className={styles.number}>{step.number}</div>
                        <div className={styles.wrapperText}>
                          <p className={styles.cardTitle}>{step.title}</p>
                          <p className={styles.cardDesc}>{step.description}</p>
                        </div>
                      </div>
                      <Image
                        src={step.image}
                        width={476}
                        height={400}
                        alt={`Step ${step.number}`}
                        className={styles.img}
                        priority
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
