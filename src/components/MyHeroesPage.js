import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import HeroDisplay from "./HeroDisplay";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";

export default function MyHeroesPage({ alignment }) {
  const { myHeroes, deleteMyHero } = useContext(HeroContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={opacityAnmtn}
      transition={transition}
      // className={alignment}
    >
      <div className="form-container">
        <div className="page-title form-title red-border">
          {/* <h1 className="section-head page-title red-border"> */}
          My {alignment === "good" ? "Heroes" : "Villains"}
          {/* </h1> */}
        </div>
      </div>
      {myHeroes.map((val) => {
        if (!val.alignment.includes(alignment)) {
          return null;
        }
        return (
          <HeroDisplay
            isMyHero={true}
            // key={val.id}
            // id={val.id}
            key={val.hero_id}
            hero_id={val.hero_id}
            name={val.name}
            // intel={val.intel}
            // strength={val.strength}
            // speed={val.speed}
            // durability={val.durability}
            // power={val.power}
            // combat={val.combat}
            // fullName={val.fullName}
            // birthplace={val.birthplace}
            alignment={val.alignment}
            url={val.url}
            deleteMyHero={deleteMyHero}
          />
        );
      })}
    </motion.div>
  );
}
