'use client';

import { Header } from '@/components/header/header';

import styles from './regulations-layout.module.css';


export default function ShoppingCardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />

            <section className={styles.shoppingCardContainer}>
                <div className={styles.wrapper}>
                    <main className={styles.content}>
                        {children}
                    </main>
                </div>
            </section>
        </>
    );
}
