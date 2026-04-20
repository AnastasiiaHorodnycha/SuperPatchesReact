import cn from "classnames";
import Image from "next/image";
import style from './style.module.scss'


export const Header = () => {
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
              <a href="#">Shop</a>
            </li>
            <li className={cn(style.navItem, style.dropdown)}>
              <a title="Performance" href="#" className={style.dropdownLink}>Performance</a> 
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Baseball" href="#" className={style.dropdownItem}>Baseball</a></li>
                <li><a title="Basketball" href="#" className={style.dropdownItem}>Basketball</a></li>
                <li><a title="Football" href="#" className={style.dropdownItem}>Football</a></li>
                <li><a title="Golf" href="#" className={style.dropdownItem}>Golf</a></li>
                <li><a title="Hockey" href="#" className={style.dropdownItem}>Hockey</a></li>
                <li><a title="Running" href="#" className={style.dropdownItem}>Running</a></li>
                <li><a title="Soccer" href="#" className={style.dropdownItem}>Soccer</a></li>
                <li><a title="Tennis" href="#" className={style.dropdownItem}>Tennis</a></li>
              </ul>                         
            </li>
            <li className={style.navItem}>
              <a title="Wellness" href="#" className={style.dropdownLink}>Wellness</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Balance and Mobility" href="#" className={style.dropdownItem}>Balance and Mobility</a></li>
                <li><a title="Focus" href="#" className={style.dropdownItem}>Focus</a></li>
                <li><a title="Pain Management" href="#" className={style.dropdownItem}>Pain Management</a></li>
                <li><a title="Rehab & Recovery" href="#" className={style.dropdownItem}>Rehab & Recovery</a></li>
                <li><a title="Sleep" href="#" className={style.dropdownItem}>Sleep</a></li>
                <li><a title="Stress" href="#" className={style.dropdownItem}>Stress</a></li>
                <li><a title="Metabolism" href="#" className={style.dropdownItem}>Metabolism</a></li>
              </ul> 
            </li>
            <li className={style.navItem}>
              <a title="About" href="#" className={style.dropdownLink}>About</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Our Story" href="#" className={style.dropdownItem}>Our Story</a></li>
                <li><a title="How It Works" href="#" className={style.dropdownItem}>How It Works</a></li>
                <li><a title="Videos" href="#" className={style.dropdownItem}>Videos</a></li>
                <li><a title="Health & Wellness Blog" href="#" className={style.dropdownItem}>Health & Wellness Blog</a></li>
                <li><a title="Events & Press Releases" href="#" className={style.dropdownItem}>Events & Press Releases</a></li>
                <li><a title="Scientific Advisory Board" href="#" className={style.dropdownItem}>Scientific Advisory Board</a></li>
                <li><a title="FAQs" href="#" className={style.dropdownItem}>FAQs</a></li>
                <li><a title="Contact Us" href="#" className={style.dropdownItem}>Contact Us</a></li>
              </ul> 
            </li>
            <li className={style.navItem}>
              <a title="English" href="#" className={style.dropdownLink}>English</a>
              <ul className={style.dropdownMenu} role="menu">
                <li><a title="Switch to Deutsch" href="#" className={style.dropdownItem}><span className={style.wpmlLsNative} lang="de">Deutsch</span></a></li>
                <li><a title="Switch to Français" href="#" className={style.dropdownItem}><span className={style.wpmlLsNative} lang="fr">Français</span></a></li>
                <li><a title="Switch to Italiano" href="#" className={style.dropdownItem}><span className={style.wpmlLsNative} lang="it">Italiano</span></a></li>
                <li><a title="Switch to Español" href="#" className={style.dropdownItem}><span className={style.wpmlLsNative} lang="es">Español</span></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  ) 
}