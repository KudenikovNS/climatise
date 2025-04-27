import styles from "./resources.module.css";
import Image from "next/image";
import Button from "../button/button";

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Omnibus poenostavitev CSRD: korak naprej ali korak nazaj?",
      description: "Predlagana Omnibus poenostavitev Direktive o poročanju o trajnostnem razvoju podjetij (CSRD) je sprožila strastne razprave...",
      type: "Članek",
      readTime: "4 min",
      image: "/img/resource1.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "What Are Scope 1, Scope 2 and Scope 3? | Carbon Emissions Explained",
      description: "When producing a Streamlined Energy & Carbon Report (SECR), emissions are defined under differing scopes by the GHG Protocol – Scope 1...",
      type: "Članek",
      readTime: "5 min",
      image: "/img/resource2.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Scope 3 Reporting: The Non-Negotiable for Sustainable Success",
      description: "As businesses increasingly prioritise sustainability amidst growing climate pressures and...",
      type: "Članek",
      readTime: "10 min",
      image: "/img/resource3.jpg",
      url: "#"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Viri</h2>
          <Button text="Prikaži vse" />

        </div>

        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <div key={resource.id} className={styles.resourceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className={styles.resourceImage}
                />
                <div className={styles.badges}>
                  <span className={styles.badge}>{resource.type}</span>
                  <span className={styles.badge}>{resource.readTime}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <p className={styles.description}>{resource.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}