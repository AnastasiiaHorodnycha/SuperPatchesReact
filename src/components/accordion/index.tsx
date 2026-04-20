'use client';
import { useState } from "react";
import cn from "classnames";
import style from './style.module.scss'
const data = [
  {
    question: "How does super patch's technology work?",
    answer:
      "The technology inside the Super Patch has uniquely arranged ridges that look like a QR code, when these ridges touch our skin, our cells transmit unique signals that interact with our body's nervous system. The inventor of these patches discovered the different signals that work with the body's physical, mental and emotional functions, each different Super Patch has a unique ridged pattern (QR Codes) that helps with a wide array of wellness and performance benefits"
  },
  {
    question: "How do you use super patch technology?",
    answer:
      "Super Patch technology couldn't be easier to use! The technology is strategically placed on all of the products to be in contact with your skin, thus initiating the vibrotactile stimulation."
  },
  {
    question: "Is Super Patch Technology Safe?",
    answer:
      "Yes! Super Patch technology was strategically studied and designed to provide a 100% drug-free, natural, and non-invasive solution for people managing pain, balance, and mobility issues, and have since developed many more solutions to help improve more people's quality of life. Plus, the effects are almost immediate!"
  },
  {
    question: "What is your return policy?",
    answer:
      "Super Patch offers a full 30-day money-back guarantee, giving you plenty of time to try the product and experience the benefits, first-hand."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={style.accordion}>
      {data.map((item, index) => {
        const isOpen = activeIndex === index;
        return (        
        <div className={style.accordionItem} key={index}>
          <button
            className={cn(style.accordionTitle, {[style.active] : isOpen})}
            onClick={() => handleItemClick(index)}
          >
            <span className={style.accordionArrow}></span> 
            <span className={style.accordionTitleText}>{item.question}</span>
          </button>

          <div className={cn(style.accordionContent, { [style.open]: isOpen })}>
            <p>{item.answer}</p>
          </div>
        </div>
      )})}
    </div>
  );
};

export default Accordion;