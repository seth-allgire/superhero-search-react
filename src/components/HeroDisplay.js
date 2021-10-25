import React from "react";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";

export default function HeroDisplay({
  isMyHero,
  id,
  name,
  // intel,
  // strength,
  // speed,
  // durability,
  // power,
  // combat,
  // fullName,
  // birthplace,
  alignment,
  url,
  hero_id,
  addMyHero,
  deleteMyHero,
}) {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={opacityAnmtn}
      transition={transition}
    >
      <div
        className="hero-container"
        initial="out"
        animate="in"
        exit="out"
        variants={opacityAnmtn}
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
                  hero_id,
                  name,
                  url,
                  alignment,
                  // intel,
                  // strength,
                  // speed,
                  // durability,
                  // power,
                  // combat,
                  // fullName,
                  // birthplace,
                })
              }
            >
              Save {alignment === "good" ? "Hero" : "Villain"}
            </button>
          )}
          {isMyHero && (
            <button
              className="hero-button"
              onClick={() => deleteMyHero(hero_id)}
            >
              Remove {alignment === "good" ? "Hero" : "Villain"}
            </button>
          )}
          {/* <Accordion sx={{ width: 200, marginBottom: 1 }}>
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
                <li>Strength: {strength}</li>
                <li>Durability: {durability}</li>
                <li>Power: {power}</li>
                <li>Speed: {speed}</li>
                <li>Intelligence: {intel}</li>
                <li>Combat: {combat}</li>
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
                <li>Race: {race}</li>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
      </div>
    </motion.div>
  );
}
