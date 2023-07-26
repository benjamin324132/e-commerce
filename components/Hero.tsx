"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false
    })
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/hero.jpg"
        fill
        alt="background"
        className="object-cover"
        priority={false}
      />
      <div className="absolute bottom-20">
        <div
          ref={slider}
          className=" relative whitespace-nowrap text-yellow-300"
        >
          <h3
            ref={firstText}
            className="relative m-0 text-6xl  md:text-[12rem] font-black pr-4"
          >
            Find Your Next Book
          </h3>
          <h3
            ref={secondText}
            className="m-0 text-6xl  md:text-[12rem] font-black pr-4 absolute left-full top-0"
          >
            Find Your Next Book
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
