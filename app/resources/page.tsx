import styles from "./resources.module.css";
import Image from "next/image";

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
      title: "Omnibus poenostavitev CSRD: korak naprej ali korak nazaj?",
      description: "Predlagana Omnibus poenostavitev Direktive o poročanju o trajnostnem razvoju podjetij (CSRD) je sprožila strastne razprave...",
      type: "Članek",
      readTime: "5 min",
      image: "/img/resource1.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Omnibus poenostavitev CSRD: korak naprej ali korak nazaj?",
      description: "Predlagana Omnibus poenostavitev Direktive o poročanju o trajnostnem razvoju podjetij (CSRD) je sprožila strastne razprave...",
      type: "Članek",
      readTime: "10 min",
      image: "/img/resource1.jpg",
      url: "#"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Viri</h2>

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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.badges}>
                  <span className={styles.typeBadge}>{resource.type}</span>
                  <span className={styles.timeBadge}>{resource.readTime}</span>
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