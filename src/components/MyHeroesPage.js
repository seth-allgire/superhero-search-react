import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import HeroDisplay from "./HeroDisplay";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function MyHeroesPage({ alignment }) {
  const { user, myHeroes, deleteMyHero } = useContext(HeroContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      className={alignment}
    >
      <h1 className="section-head page-title">
        {user.username}'s {alignment === "good" ? "Heroes" : "Villains"}
      </h1>
      {myHeroes.map((val) => {
        if (!val.alignment.includes(alignment)) {
          return <></>;
        }
        return (
          <HeroDisplay
            isMyHero={true}
            key={val.id}
            id={val.id}
            hero_id={val.hero_id}
            // name={val.name}
            // intel={val.intel}
            // strength={val.strength}
            // speed={val.speed}
            // durability={val.durability}
            // power={val.power}
            // combat={val.combat}
            // fullName={val.fullName}
            // birthplace={val.birthplace}
            alignment={val.alignment}
            // gender={val.gender}
            // race={val.race}
            // height={val.height}
            // weight={val.weight}
            url={val.url}
            deleteMyHero={deleteMyHero}
          />
        );
      })}
    </motion.div>
  );
}
