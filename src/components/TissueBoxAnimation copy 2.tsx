"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const TISSUE_COUNT = 6;

export const TissueBoxAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);
  const tissuesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const tissues = tissuesRef.current.filter(Boolean);

      if (tissues.length) {
        // Start tissues slightly inside the box
        gsap.set(tissues, {
          yPercent: 90,
          xPercent: 0,
          rotate: 0,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        tissues.forEach((tissue, idx) => {
          // Tissue comes up out of the slot
          tl.to(
            tissue,
            {
              yPercent: -10,
              xPercent: 0,
              rotate: -4,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            idx
          );

          // Then gets "thrown" up and to the side (messy)
          tl.to(
            tissue,
            {
              yPercent: -180,
              xPercent: 70,
              rotate: 22,
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            },
            idx + 0.6
          );
        });
      }

      // Subtle float animation for the whole widget
      gsap.to(boxRef.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, boxRef);

    return () => ctx.revert();
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={boxRef}
      className="fixed bottom-6 right-6 z-40 w-40 h-32 md:w-52 md:h-36 overflow-visible"
    >
      {/* Close button */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute -top-1 -right-1 h-6 w-6 opacity-60 hover:opacity-100"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button> */}

      <div className="relative w-full h-full flex items-end justify-center">
        {/* TISSUES – one visible at a time (GSAP controls) */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {Array.from({ length: TISSUE_COUNT }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) tissuesRef.current[index] = el;
              }}
              className="absolute bottom-[54%] w-[78%] h-16 md:h-20"
              style={{ transformOrigin: "bottom center" }}
            >
              {/* Messy / folded tissue shape */}
              <div
                className="relative w-full h-full shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f5f5f5 40%, #ffffff 100%)",
                  // bottom is straight & square, top is irregular "mountain"
                  clipPath:
                    "polygon(0% 40%, 10% 28%, 22% 35%, 35% 22%, 48% 30%, 60% 18%, 75% 28%, 88% 20%, 100% 30%, 100% 100%, 0% 100%)",
                }}
              >
                {/* extra soft folds / creases */}
                <div className="absolute left-2 top-2 w-10 h-3 bg-white/70 rounded-full blur-[1px]" />
                <div className="absolute right-4 top-3 w-12 h-3 bg-white/60 rounded-full blur-[1px]" />
                <div className="absolute left-6 top-5 w-16 h-3 bg-slate-100/70 rounded-full blur-[1px]" />
              </div>
            </div>
          ))}
        </div>

        {/* DAB N KLEAN box – styled similar to your reference */}
        <div className="relative z-10 w-[92%] h-[52%]">
          {/* Front face */}
          <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-xl bg-[#DB3883] shadow-lg overflow-hidden">
            {/* glossy gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c72f74] via-[#DB3883] to-[#f87fb3] opacity-90" />

            {/* simple "butterfly" style specks */}
            <div className="absolute bottom-1 left-2 flex gap-1 text-[7px] md:text-[8px] text-white/90">
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
              <span>✧</span>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-1 text-[7px] md:text-[8px] text-white/90">
              <span>✧</span>
              <span>✦</span>
            </div>

            {/* Brand text */}
            <div className="relative flex items-center h-full pl-3">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.12em] text-white uppercase">
                Dab N Klean
              </span>
            </div>
          </div>

          {/* Top face of box */}
          <div className="absolute inset-x-2 bottom-[58%] h-[26%] rounded-t-xl bg-[#f49bc4] shadow-md" />

          {/* Slot where tissue comes from */}
          <div className="absolute left-1/2 bottom-[58%] -translate-x-1/2 w-[70%] h-2 bg-[#b42b65] rounded-full shadow-sm" />
        </div>
      </div>
    </div>
  );
};
