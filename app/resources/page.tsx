import styles from "./resources.module.css";
import Image from "next/image";
import { resources } from "@/constants/resourseces";
import Link from "next/link";

export default function Resources() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Viri</h2>

        </div>

        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <div key={resource.id} className={styles.resourceCard}>
              <Link href={resource.url}>
              <div className={styles.imageContainer}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className={styles.resourceImage}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}