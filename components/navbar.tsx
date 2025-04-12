"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "./ui/button";

const navItems = [
  { item: "About", link: "#about" },
  { item: "Projects", link: "#projects" },
  { item: "Experience", link: "#experience" },
  { item: "Talk with me", link: "#chatbot" },
];

interface NavBarProps {
  setIsOpen: (open: boolean) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ setIsOpen }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    link: string
  ) => {
    e.preventDefault();
    if (link === "#chatbot") {
      setIsOpen(true);
    } else {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 20 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-row gap-4 sm:gap-8 mx-auto border border-white/10 rounded-lg z-[100] px-8 py-2 sm:py-4 bg-blue-50/5"
      >
        {navItems.map((item, index) => (
          <Button
            key={`link-${index}`}
            onClick={(e) => handleClick(e, item.link)}
            className="hover:text-[#ffd700] text-[8px] sm:text-xs md:text-md lg:text-lg"
          >
            {item.item}
          </Button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
