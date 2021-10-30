import React from "react";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
import { Button } from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  // alterEgo,
  // publisher,
  // firstAppear,
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
      <div className="form-container">
        <div className="form-surround hero-surround red-border">
          <div className="form-container">
            <h2 className="section-head form-label">{name}</h2>
            <div className="image-container">
              <img src={url} alt="hero-url" className="hero-img" />
            </div>
            {/* <Accordion
              disableGutters
              sx={{
                width: 300,
                marginBottom: 1,
                boxShadow: 0,
                borderRadius: "5px",
              }}
            >
              <AccordionSummary
                sx={{
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                  borderRadius: "5px",
                  paddingLeft: "95px",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: 14,
                  }}
                >
                  BACKGROUND
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid #144e75",

                  bgcolor: "#fff1aa",
                  color: "secondary.contrastText",
                  borderBottomRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <Typography sx={{ paddingLeft: "30px" }}>
                  <li>Alter Ego: {alterEgo}</li>
                  <li>Publisher: {publisher}</li>
                  <li>First Appearance: {firstAppear}</li>
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            {/* <div className="form-container"> */}
            {/* <Accordion
              disableGutters
              sx={{
                width: 300,
                marginBottom: 1,
                boxShadow: 0,
                borderRadius: "5px",
              }}
            >
              <AccordionSummary
                sx={{
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                  borderRadius: "5px",
                  paddingLeft: "95px",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: 14,
                  }}
                >
                  POWER STATS
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid #144e75",
                  bgcolor: "#fff1aa",
                  color: "secondary.contrastText",
                  borderBottomRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <Typography sx={{ paddingLeft: "65px" }}>
                  <li>Strength: {strength}</li>
                  <li>Durability: {durability}</li>
                  <li>Power: {power}</li>
                  <li>Speed: {speed}</li>
                  <li>Intelligence: {intel}</li>
                  <li>Combat: {combat}</li>
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            <div className="image-container">
              {!isMyHero && (
                <Button
                  variant="containedPrimary"
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
                  {" "}
                  Save {alignment === "good" ? "Hero" : "Villain"}
                  {/* // </button> */}
                </Button>
              )}
              {isMyHero && (
                <Button
                  variant="containedPrimary"
                  onClick={() => deleteMyHero(hero_id)}
                >
                  Remove {alignment === "good" ? "Hero" : "Villain"}
                </Button>
              )}
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
