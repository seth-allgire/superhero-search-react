import React from "react";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial="out"
      animate="in"
      exit="out"
      variants={opacityAnmtn}
      transition={transition}
    >
      <div className="header-container">
        <div>Search for Supers</div>
        <img
          src="https://www.pinclipart.com/picdir/big/40-407360_comic-book-clip-art-comic-book-pop-vector.png"
          alt="bam"
          className="header-image"
        />
      </div>
    </motion.header>
  );
}
