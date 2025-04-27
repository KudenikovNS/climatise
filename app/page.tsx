import { Header } from "@/components/header/header";
import HeroBlock from "@/components/hero-block/hero-block";
import StandardsCarousel from "@/components/carousel/carousel";
import styles from "./page.module.css";
import PlatformImg from "@/components/platform-img/platform-img";
import Problem from "@/components/problem/problem";
import HowItWork from "@/components/how-it-work/how-it-work";
import Resources from "@/components/resources/resources";
import FAQ from "@/components/faq/faq";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>

        <div className={styles.heroBlock}>
          <HeroBlock />
        </div>

        <div className={styles.standardsCarouselContainer}>
          <StandardsCarousel />
        </div>

        <div className={styles.platformImgContainer}>
          <PlatformImg />
        </div>

        <div className={styles.problemContainer}>
          <Problem />
        </div>

        <HowItWork />

        <div className={styles.resourcesContainer}>
          <Resources />
        </div>

        <FAQ />

      </main>
    </>
  );
}
