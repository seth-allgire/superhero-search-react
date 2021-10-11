import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
// import useToggleVisibility from "../hooks/useToggleVisibility";
// import HeroStats from "../HeroStats";

export default function HeroDisplay({
  isMyHero,
  id,
  name,
  intel,
  strength,
  speed,
  durability,
  power,
  combat,
  fullName,
  birthplace,
  alignment,
  gender,
  race,
  height,
  weight,
  url,
  addMyHero,
  deleteMyHero,
}) {
  // const [HeroStatsComponent, toggleStatsVisiblity] = useToggleVisibility(
  //   <HeroStats />
  // );
  const [showStats, setShowStats] = useState(false);
  const clickShowStats = () => setShowStats(true);

  const [showBio, setShowBio] = useState(false);
  const clickShowBio = () => setShowBio(true);

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
        <h2 className="section-head hero-name">{name}</h2>
        <div className="image-container">
          <img src={url} alt="hero-url" className="hero-img" />
        </div>
        <button className="hero-button" onClick={clickShowStats}>
          Power Stats
        </button>
        <button className="hero-button bio-button" onClick={clickShowBio}>
          Hero Bio
        </button>

        {!isMyHero && (
          <button
            className="hero-button"
            onClick={() => addMyHero({ id, name, url, alignment })}
          >
            Save {alignment === "good" ? "Hero" : "Villain"}
          </button>
        )}
        {isMyHero && (
          <button className="hero-button" onClick={() => deleteMyHero(id)}>
            Remove {alignment === "good" ? "Hero" : "Villain"}
          </button>
        )}

        {showStats === true && (
          <div className="hero-info-container">
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={animationOne}
              transition={transition}
              className="stats"
            >
              <p>Strength: {strength}</p>
              <p>Durability: {durability}</p>
              <p>Power: {power}</p>
              <p>Speed: {speed}</p>
              <p>Intelligence: {intel}</p>
              <p>Combat: {combat}</p>
            </motion.div>
          </div>
        )}

        {showBio === true && (
          <div className="hero-info-container">
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={animationOne}
              transition={transition}
            >
              <p>Name: {fullName}</p>
              <p>Birthplace: {birthplace}</p>
              <p>Race: {race}</p>
              <p>Gender: {gender}</p>
              <p>Height: {height}</p>
              <p>Weight: {weight}</p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
