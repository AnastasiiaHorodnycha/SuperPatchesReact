'use client';

import { useState, useEffect } from 'react';
import cn from "classnames";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import style from './style.module.scss'
import i18n from '../../i18n';

export const Header = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(i18n.language);
    setMounted(true);
  }, []);

  // Return original text during SSR to prevent hydration mismatch
  const getTranslation = (key: string) => {
    if (!mounted) return key;
    return t(key);
  };

  const changeLanguage = async (lng: string) => {
    console.log('Changing language to:', lng);
    await i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  const getLanguageLabel = () => {
    if (!mounted) return 'English';
    return currentLang === 'en' ? 'English' :
           currentLang === 'de' ? 'Deutsch' :
           currentLang === 'fr' ? 'Français' :
           currentLang === 'it' ? 'Italiano' :
           currentLang === 'es' ? 'Español' : 'English';
  };

  return (
    <header className={style.header}>
      <div className={cn("container", style.headerContainer)}>
        <div className={style.headerTop}>
          <a href="#">
            <Image
              className="logo"
              src="/images/superpatch-logo.png"
              alt="Super Patch"
              width={184}
              height={64}
              priority
            />
          </a>

          <button className={style.hamburger}>
            <span className={style.hamburgerBar}></span>
          </button>
        </div>

        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a href="#">{getTranslation('Shop')}</a>
            </li>
            <li className={cn(style.navItem, style.dropdown)}>
              <a title="Performance" href="#" className={style.dropdownLink}>{getTranslation('Performance')}</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Baseball" href="#" className={style.dropdownItem}>{getTranslation('Baseball')}</a></li>
                <li><a title="Basketball" href="#" className={style.dropdownItem}>{getTranslation('Basketball')}</a></li>
                <li><a title="Football" href="#" className={style.dropdownItem}>{getTranslation('Football')}</a></li>
                <li><a title="Golf" href="#" className={style.dropdownItem}>{getTranslation('Golf')}</a></li>
                <li><a title="Hockey" href="#" className={style.dropdownItem}>{getTranslation('Hockey')}</a></li>
                <li><a title="Running" href="#" className={style.dropdownItem}>{getTranslation('Running')}</a></li>
                <li><a title="Soccer" href="#" className={style.dropdownItem}>{getTranslation('Soccer')}</a></li>
                <li><a title="Tennis" href="#" className={style.dropdownItem}>{getTranslation('Tennis')}</a></li>
              </ul>
            </li>
            <li className={style.navItem}>
              <a title="Wellness" href="#" className={style.dropdownLink}>{getTranslation('Wellness')}</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Balance and Mobility" href="#" className={style.dropdownItem}>{getTranslation('Balance and Mobility')}</a></li>
                <li><a title="Focus" href="#" className={style.dropdownItem}>{getTranslation('Focus')}</a></li>
                <li><a title="Pain Management" href="#" className={style.dropdownItem}>{getTranslation('Pain Management')}</a></li>
                <li><a title="Rehab & Recovery" href="#" className={style.dropdownItem}>{getTranslation('Rehab & Recovery')}</a></li>
                <li><a title="Sleep" href="#" className={style.dropdownItem}>{getTranslation('Sleep')}</a></li>
                <li><a title="Stress" href="#" className={style.dropdownItem}>{getTranslation('Stress')}</a></li>
                <li><a title="Metabolism" href="#" className={style.dropdownItem}>{getTranslation('Metabolism')}</a></li>
              </ul>
            </li>
            <li className={style.navItem}>
              <a title="About" href="#" className={style.dropdownLink}>{getTranslation('About')}</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Our Story" href="#" className={style.dropdownItem}>{getTranslation('Our Story')}</a></li>
                <li><a title="How It Works" href="#" className={style.dropdownItem}>{getTranslation('How It Works')}</a></li>
                <li><a title="Videos" href="#" className={style.dropdownItem}>{getTranslation('Videos')}</a></li>
                <li><a title="Health & Wellness Blog" href="#" className={style.dropdownItem}>{getTranslation('Health & Wellness Blog')}</a></li>
                <li><a title="Events & Press Releases" href="#" className={style.dropdownItem}>{getTranslation('Events & Press Releases')}</a></li>
                <li><a title="Scientific Advisory Board" href="#" className={style.dropdownItem}>{getTranslation('Scientific Advisory Board')}</a></li>
                <li><a title="FAQs" href="#" className={style.dropdownItem}>{getTranslation('FAQs')}</a></li>
                <li><a title="Contact Us" href="#" className={style.dropdownItem}>{getTranslation('Contact Us')}</a></li>
              </ul>
            </li>
            <li className={style.navItem}>
              <a title="Language" href="#" className={style.dropdownLink}>
                {getLanguageLabel()}
              </a>
              <ul className={style.dropdownMenu} role="menu">
                <li><button type="button" onClick={() => changeLanguage('en')} className={style.dropdownItem}><span lang="en">English</span></button></li>
                <li><button type="button" onClick={() => changeLanguage('de')} className={style.dropdownItem}><span lang="de">Deutsch</span></button></li>
                <li><button type="button" onClick={() => changeLanguage('fr')} className={style.dropdownItem}><span lang="fr">Français</span></button></li>
                <li><button type="button" onClick={() => changeLanguage('it')} className={style.dropdownItem}><span lang="it">Italiano</span></button></li>
                <li><button type="button" onClick={() => changeLanguage('es')} className={style.dropdownItem}><span lang="es">Español</span></button></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}