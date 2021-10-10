import React from "react";
// import { useContext } from "react";
// import { HeroContext } from "../shared/HeroContext";
import { Button } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function HeroDisplay({
  isMyHero,
  //   key,
  id,
  name,
  intel,
  strength,
  speed,
  durability,
  power,
  combat,
  //   fullName,
  //   birthplace,
  alignment,
  //   gender,
  //   race,
  //   height,
  //   weight,
  url,
  addMyHero,
  deleteMyHero,
  //   showStats,
  //   clickShowStats,
  //   setShowStats,
  //   showDiv,
  //   clickToShow,
}) {
  const [showStats, setShowStats] = useState(false);
  const clickShowStats = () => setShowStats(true);
  //   const { showDiv, clickToShow } = useContext(HeroContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div
        className="hero-container"
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
      >
        <h2 className="section-head">{name}</h2>

        <img src={url} alt="hero-url" className="hero-img" />
        {!isMyHero && (
          <Button
            variant="contained"
            onClick={() => addMyHero({ id, name, url, alignment })}
          >
            Add to My {alignment === "good" ? "Heroes" : "Villains"}
          </Button>
        )}
        {isMyHero && (
          <Button variant="contained" onClick={() => deleteMyHero(id)}>
            Remove from My {alignment === "good" ? "Heroes" : "Villains"}
          </Button>
        )}

        <Button variant="contained" onClick={clickShowStats}>
          Show Stats
        </Button>
        {showStats === true && (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
          >
            <p>Strength: {strength}</p>
            <p>Durability: {durability}</p>
            <p>Power: {power}</p>
            <p>Speed: {speed}</p>
            <p>Intelligence: {intel}</p>
            <p>Combat: {combat}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
