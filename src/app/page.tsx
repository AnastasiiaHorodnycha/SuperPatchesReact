'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import SimpleSlider from "../components/slider";
import Accordion from "../components/accordion";
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Home() {
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
    <div className="wrapper">
      <Header />

      <div className="banner">
        <Image
          className="bannerImage bannerImageDesktop"
          src="/images/banner/SP_Pack_Liberty_V2.webp"
          alt="Super Patch Banner"
          fill={true}
        />
        <Image
          className="bannerImage bannerImageMobile"
          src="/images/banner/SP_Pack_Liberty_V2_m.webp"
          alt="Super Patch Banner"
          fill={true}
        />

        <div className="bannerContent">
          <div className="bannerTitleWrap">
            <div className="bannerTitle">
              <h1>{getTranslation('Balance & Energy')}</h1>
            </div>
          </div>

          <div className="bannerSubTitle">
            <div className="bannerTitleArrow">
              <div className="bannerTitleArrowImg">
                <Image
                  className=""
                  src="/images/icon-rev-h1.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="family-poppins bannerSubTitleText">
              {getTranslation('Stay active and healthy with Super Patch helping you maintain better balance and improved mobility.')}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-violet section">
        <div className="container container--md">
          <h2>{getTranslation('Find Your Balance And Energy, 100% Naturally')}</h2>
          <div className="family-roboto-slab section-text">
            {getTranslation('Our noninvasive and drug-free technology may assist in better balance and stability - key components to maintaining wellbeing.')}
          </div>
        </div>
      </div>

      <div className="bg-beige section">
        <div className="container">
          <div className="characes grid md:grid-cols-4">
            <div>
              <div className="charac">
                <div className="characIcon">
                  <Image
                    className=""
                    src="/images/characes/yoga.png"
                    alt="Balance & Stability"
                    width={162}
                    height={162}
                    priority
                  />
                </div>
                <h3 className="family-alata characTitle">{getTranslation('Balance & Stability')}</h3>
              </div>
            </div>
            <div>
              <div className="charac">
                <div className="characIcon">
                  <Image
                    className=""
                    src="/images/characes/walk.png"
                    alt="Greater Mobility"
                    width={162}
                    height={162}
                    priority
                  />
                </div>
                <h3 className="family-alata characTitle">{getTranslation('Greater Mobility')}</h3>
              </div>
            </div>
            <div>
              <div className="charac">
                <div className="characIcon">
                  <Image
                    className=""
                    src="/images/characes/increased-energy.png"
                    alt="More Energy"
                    width={162}
                    height={162}
                    priority
                  />
                </div>
                <h3 className="family-alata characTitle">{getTranslation('More Energy')}</h3>
              </div>
            </div>
            <div>
              <div className="charac">
                <div className="characIcon">
                  <Image
                    className=""
                    src="/images/characes/no-drugs.svg"
                    alt="Drug-Free"
                    width={162}
                    height={162}
                    priority
                  />
                </div>
                <h3 className="family-alata characTitle">{getTranslation('Drug-Free')}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="patches section text-center">
        <div className="container container--md">
          <h2 className="big">{getTranslation('Recommended Products')}</h2>
          <h4>{getTranslation('Shop with a Risk-Free, 30-Day Money-Back Guarantee')}</h4>
          <div className="patchCard">
            <a href="#" className="patchCardImage">
              <Image
                className=""
                src="/images/patches/Liberty_Mock.png"
                alt="Liberty Mock"
                width={255}
                height={436}
                priority
              />
            </a>
            <h3>{getTranslation('Liberty Patch')}</h3>
            <p>
              {getTranslation('Improving how we move and change direction are cornerstones of a good lifestyle and daily activity. Whether going up or down stairs, walking, running, working, or playing. Liberty Patch is a noninvasive and drug-free technology that may assist in better balance and stability - key components to maintaining well-being.')}
            </p>
            <small>
              {getTranslation('Disclaimer: This product does not have medical purpose however is intended to improve general wellness. The effect has not yet been scientifically Proven though is based on a non-randomized and non-placebo-controlled study, user reports and experience.')}
            </small>
            <a href="#" className="btn btn--black-white">{getTranslation('Shop Now')}</a>
            <a href="#" className="btn btn--black-white">{getTranslation('SHOP ALL PATCHES')}</a>
          </div>
        </div>
      </div>

      <div className="bg-blue section text-center">
        <div className="container">
          <h3 className="big md:pt-5 md:pb-8">{getTranslation('Studies Show: Better Balance And Strength')}</h3>
          <p className="text-medium family-roboto-slab">
            {getTranslation('Our vibrotactile patterns have been shown to improve balance by 31% and strength by 18%.')}
          </p>
          <p className="font-bold family-roboto-slab text-medium">
            {getTranslation('The Liberty Patch may assist in your mobility, balance and stability which are important parts of rehab, recovery and an active lifestyle.')}
          </p>
          <div className="grid md:grid-cols-3">
            <div className="px-3">
              <p className="font-bold">
                {getTranslation('Piezo Ion Channels and Their Association With Haptic Technology Use: A Narrative Review')}
              </p>
              <a href="#" className="btn btn--black-white">{getTranslation('Download the Study')}</a>
            </div>
            <div className="px-3">
              <p className="font-bold">
                {getTranslation('Improvement in Balance and Stability Using a Novel Sensory Application - Haptic Vibrotactile Trigger Technology')}
              </p>
              <a href="#" className="btn btn--black-white">{getTranslation('Download the Study')}</a>
            </div>
            <div className="px-3">
              <p className="font-bold">
                {getTranslation('Improvement in Athletic Performance')}
              </p>
              <a href="#" className="btn btn--black-white">{getTranslation('Download the Study')}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow section">
        <div className="container">
          <h3 className="text-center md:pt-5 md:pb-5 family-alata testimonialsTitle">{getTranslation('Testimonials')}</h3>
          <div className="testimonial">
            <Image
              className=""
              src="/images/video-banner/cookie-consent-banner.png"
              alt="Cookie consent"
              width={472}
              height={266}
              priority
            />
            <p>{getTranslation('“Physical therapists in the hospital notice the improvement in their posture, their gait, and their stability.”')}</p>
            <h4 className="family-alata">{getTranslation('Steve Wolf, MD, Orthopedic Spinal Surgeon')}</h4>
          </div>
        </div>
      </div>

      <div className="reviews section">
        <div className="container text-center">
          <h2 className="family-poppins">{getTranslation('Read Real Reviews')}</h2>
          <h4 className="family-poppins">{getTranslation('Over 6 million people have used VTT Technology, with some people seeing incredible results!')}</h4>
        </div>
        <div className="container-full">
          <div className="slider-wrap">
            <SimpleSlider />
          </div>
        </div>
      </div>

      <div className="bg-orange section faq">
        <div className="container container--md">
          <div className="text-center">
            <h3 className="family-poppins font-bold">{getTranslation('FAQ')}</h3>
          </div>
          <Accordion />
        </div>
      </div>

      <Footer />
    </div>
  );
}
