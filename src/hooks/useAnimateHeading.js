

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useAnimateHeading = (target, trigger) => {
  useGSAP(() => {
    gsap.from(target, {
      opacity: 0,
      y: 200,
      filter: "blur(2px)",
      stagger: 0.5,
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom 80%",
        once: true
      },
      ease: 'power1.out',
    });
  }, [target, trigger]);
};