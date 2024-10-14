"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/all";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);

const TryTest = () => {
  const TextRef = useRef(null);
  const tl = gsap.timeline({ defaults: { duration: 5 } });

  useEffect(() => {
    tl.to(TextRef.current, {
      duration: 4,
      repeat: -1,

      //   scrambleText: {
      //     text: "Edimarf Satumbo",
      //     chars: "!1€5@#][6&$(=)£AF/&(234$$2N€O=(!@[",
      //     revealDelay: 0.5,
      //     speed: 0.1,
      //     tweenLength: false,
      //   },
      ease: "power3.inOut",
      scrambleText: {
        text: "Aashaq",

        chars: "#$%^&*",
        revealDelay: 2,
        speed: 0.01,
        tweenLength: true,
      },
    });
  });

  return (
    <section className="flex h-screen font-bold text-3xl justify-center items-center text-red-500">
      <div ref={TextRef}></div>
    </section>
  );
};

export default TryTest;
