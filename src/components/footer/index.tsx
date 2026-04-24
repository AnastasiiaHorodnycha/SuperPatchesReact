import { useState, useEffect } from 'react';
import cn from "classnames";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import style from './style.module.scss'


export const Footer = () => {
  const { t } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return original text during SSR to prevent hydration mismatch
  const getTranslation = (key: string) => {
    if (!mounted) return key;
    return t(key);
  };

  return (
    <footer className={cn("bg-violet", style.footer)}>
      <div className={cn("container", style.footerContainer, style.footerTop)}>
        <div className={"text-center"}>
          <h3 className={style.footerTitle}>{getTranslation('Start Feeling SUPER')}</h3>
          <p className={"font-light"}>{getTranslation('We offer a 30-day money-back guarantee on all Super Patch products (some exceptions apply)')}</p>

        </div>

        <div className={cn("grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "text-center")}>
          <div>
            <h4 className={style.footerLinksTitle}>{getTranslation('Shop')}</h4>
            <ul className={style.footerLinks}>
              <li><a href="#">{getTranslation('Shop All Super Patches')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className={style.footerLinksTitle}>{getTranslation('Solutions')}</h4>
            <ul className={style.footerLinks}>
              <li><a href="#">{getTranslation('Athletic Performance')}</a></li>
              <li><a href="#">{getTranslation('Pain Management')}</a></li>
              <li><a href="#">{getTranslation('Sleep')}</a></li>
              <li><a href="#">{getTranslation('Everyday Wellness')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className={style.footerLinksTitle}>{getTranslation('About us')}</h4>
            <ul className={style.footerLinks}>
              <li><a href="#">{getTranslation('Our Story')}</a></li>
              <li><a href="#">{getTranslation('Contact Us')}</a></li>
              <li><a href="#">{getTranslation('Brand Ambassadors')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className={style.socials}>
          <ul>
            <li>
              <a href="#">
                <Image
                  src="/images/socials/instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/images/socials/facebook.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/images/socials/youtube.png"
                  alt="YouTube"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/images/socials/envelope.png"
                  alt="Email"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
          </ul>
        </div>

        <div className={style.disclaimerText}>
          <p>
            {getTranslation('Disclaimer: The statements made in connection with these products have not been reviewed by the Food and Drug Administration (FDA), and the product’ efficacy has not been confirmed through Food and Drug Administration-approved studies. This product is not intended to diagnose, treat, cure or prevent any disease.')}
          </p>
          <p>
            {getTranslation('In France, our EPR number is FR371598_01KLXF.')}
          </p>
          <p>
            {getTranslation('Freedom: This medical device is for single use and is not intended to diagnose, treat, or cure any disease. Any serious incident that has occurred in relation to the FREEDOM patch should be reported to the manufacturer or authorized representative, and to the competent authority of the Member State in which you are established.')}
          </p>
          <p>
            {getTranslation('REM: This product does not have medical purpose however is intended to improve general wellness. The effects have not yet been scientifically proven but are based on a non-randomized and non-placebo-controlled study, user reports and experience.')}
          </p>
          <p>
            {getTranslation('Victory: This product does not have medical purpose however is intended to improve general wellness. The effect has not yet been scientifically Proven though is based on a non-randomized and non-placebo-controlled study, user reports and experience.')}
          </p>
          <p>
            {getTranslation('Liberty: This product does not have medical purpose however is intended to improve general wellness. The effect has not yet been scientifically Proven though is based on a non-randomized and non-placebo-controlled study, user reports and experience.')}
          </p>
          <p>
            {getTranslation('Lumi, Rocket, Peace, Defend, Joy, Kick It, Ignite, Focus, Boost: This product does not have a medical purpose however is intended to improve general wellness. The effect has not yet been scientifically proven but is based on user reports and experience.')}
          </p>
        </div>
      </div>

      <div className={style.copy}>
        <div className={cn("container", style.footerContainer, style.copyContainer)}>
          <span>{getTranslation('Copyright 2026 © The Super Patch Co.')}</span>
          <div className={style.copyLinks}>
            <a href="#">{getTranslation('Privacy Policy & Disclaimer')}</a>
            <a href="#">{getTranslation('Terms & Conditions')}</a>
            <a href="#">{getTranslation('Returns & Refunds Policy')}</a>
            <a href="#">{getTranslation('Imprint')}</a>
          </div>
        </div>
      </div>
    </footer>
  ) 
}