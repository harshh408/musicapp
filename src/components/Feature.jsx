import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Feature({ icon, title }) {
  const variant = {
    visible: {
      scale: 1,
    },
    hidden: {
      scale: 0.5,
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="feature flex flex-col items-center justify-center text-center mx-6 sm:mx-8 md:mx-12 max-w-xs"
    >
      {/* icon */}
      <motion.div
        variants={variant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          duration: 1,
          type: "ease-out",
        }}
        className="icon bg-[#081730] rounded-2xl p-4"
      >
        <img
          src={require(`../img/${icon}.png`)}
          alt=""
          className="w-[2.5rem] md:w-[3rem]"
        />
      </motion.div>

      <span className="mt-4 text-base md:text-lg font-semibold">{title}</span>

      <span className="text-[#707070] mt-3 text-sm md:text-base leading-relaxed px-2 sm:px-0">
        Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
        libero, sit amet laoreet lorem.
      </span>

      <span className="text-[#E600FF] underline mt-6 hover:cursor-pointer text-sm md:text-base">
        Learn more
      </span>
    </div>
  );
}

export default Feature;
