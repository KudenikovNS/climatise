'use client';

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { navItems } from "@/constants/navigation";

import logo from "@/public/icon/logo.svg";

export function Header() {
  const [activePath, setActivePath] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          <Image
            src={logo}
            alt="Domov"
            width={111}
            height={31}
          />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navbarLink} ${activePath === item.href ? styles.active : ""}`}
            >
              <span className={styles.textWrapper}>
                <span className={styles.textTop}>{item.label}</span>
                <span className={styles.textBottom}>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>

        <div className={styles.btnBook}>
          <Button />
        </div>

        <button
          className={`${styles.burgerButton} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileNavWrapper}>
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${activePath === item.href ? styles.mobileActive : ""}`}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
