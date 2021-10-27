import React, { useContext } from "react";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
import { Avatar } from "@mui/material";
import { HeroContext } from "../shared/HeroContext";

export default function Header() {
  const { user } = useContext(HeroContext);
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
        <div className="header-title">Search for Supers</div>

        {/* <img
          src="https://www.pinclipart.com/picdir/big/40-407360_comic-book-clip-art-comic-book-pop-vector.png"
          alt="bam"
          className="header-image"
        /> */}

        {user.username && (
          <div>
            <div className="show-user">
              <Avatar src="./" alt={user.username} />
            </div>
            <div className="show-user">
              <div>{user.username} </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
