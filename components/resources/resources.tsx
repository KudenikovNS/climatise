import styles from "./resources.module.css";
import Image from "next/image";
import Button from "../button/button";
import { resources } from "@/constants/resourseces";

export default function Resources() {
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