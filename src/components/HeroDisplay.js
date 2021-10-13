import React from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
        <div className="hero-button-container">
          {!isMyHero && (
            <button
              className="hero-button"
              onClick={() =>
                addMyHero({
                  id,
                  name,
                  url,
                  alignment,
                  intel,
                  strength,
                  speed,
                  durability,
                  power,
                  combat,
                  fullName,
                  birthplace,
                  gender,
                  race,
                  height,
                  weight,
                })
              }
            >
              Save {alignment === "good" ? "Hero" : "Villain"}
            </button>
          )}
          {isMyHero && (
            <button className="hero-button" onClick={() => deleteMyHero(id)}>
              Remove {alignment === "good" ? "Hero" : "Villain"}
            </button>
          )}
          <Accordion sx={{ width: 200, marginBottom: 1 }}>
            <AccordionSummary
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
              }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Stats</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
              }}
            >
              <Typography>
                <div>Strength: {strength}</div>
                <div>Durability: {durability}</div>
                <div>Power: {power}</div>
                <div>Speed: {speed}</div>
                <div>Intelligence: {intel}</div>
                <div>Combat: {combat}</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
              }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
              }}
            >
              <Typography>
                <div>Race: {race}</div>
                <div>Gender: {gender}</div>
                <div>Height: {height}</div>
                <div>Weight: {weight}</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
