"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="review">
                    <h4>Melissa L</h4>
                    <div className="reviewStars">
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
                    <p className="text-fond">Incredible little patch!</p>
                    <p>
                      I have been using these patches for the past couple years and LOVE 
                      how amazing they make me feel! Stronger, more balanced, and easily 
                      have less pain! I place it close to my shoulder when it acts up and 
                      the pain goes away! Love it!
                    </p>
                  </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}