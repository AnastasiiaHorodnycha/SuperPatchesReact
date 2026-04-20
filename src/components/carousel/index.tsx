'use client'

import cn from "classnames";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import style from './style.module.scss'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  console.log('111', emblaApi)

  const goToPrev = () => emblaApi?.goToPrev()
  const goToNext = () => emblaApi?.goToNext()

  

  return (
    <div className={"embla"}>
      <div className={cn("embla__viewport", style.emblaViewport)} ref={emblaRef}>
        <div className={cn("embla__container", style.emblaContainer)}>
          <div className={cn("embla__slide", style.emblaSlide)}>
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
          </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button>

    </div>
  )
}