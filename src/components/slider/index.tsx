"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import style from './style.module.scss'

const dataReview = [
  {
    author: "Melissa L",
    title: "Helps with pain",
    content: "These have helped so much with my chronic headache pain."
  },
  {
    author: "Vicki Smith",
    title: "Amazing product!",
    content: "I suffer from post concussion syndrome and these patches help me deal with so many of the symptoms I deal with on a daily basis. Love, love, love them and use them all the time! <br /> <br />I love these patches for pain relief, balance, and stability."
  },
  {
    author: "Jacki J",
    title: "My life has changed",
    content: "At times, I have severe joint and muscle pain. These Super Patches have given me more pain-free days that I've had in 10 years!"
  },
  {
    author: "Theresa Z",
    title: "Incredible little patch!",
    content: "I have been using these patches for the past couple years and LOVE how amazing they make me feel! Stronger, more balanced, and easily have less pain! I place it close to my shoulder when it acts up and the pain goes away! Love it!"
  },
  {
    author: "Krista T.",
    title: "Life is better with this patch on!",
    content: "I notice my knees no longer hurt, my feet no longer hurt, I have better balance, I have more energy, I sleep better, and my anxiety is far more manageable. My body just feels like it is functioning better overall when I have this patch on."
  }
]

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {dataReview.map((item, index) => {
        return (        
          <div key={index}>
            <div className={style.review}>
              <h4 className={style.reviewAuthor}>{item.author}</h4>
              <div className={style.reviewStars}>
                <Image
                  src="/images/icon-star.png"
                  alt="star"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icon-star.png"
                  alt="star"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icon-star.png"
                  alt="star"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icon-star.png"
                  alt="star"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icon-star.png"
                  alt="star"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <h3>{item.title}</h3>
              <p>
                {item.content}
              </p>
            </div>
          </div>
        )})}
    </Slider>
  );
}