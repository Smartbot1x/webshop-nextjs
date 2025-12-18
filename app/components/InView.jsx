"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function InView({
  children,
  viewOptions = { once: true, margin: "0px 0px -250px 0px" },
  variants,
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (viewOptions.once) {
            observer.unobserve(entry.target);
          }
        } else if (!viewOptions.once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: viewOptions.margin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [viewOptions.once, viewOptions.margin]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
