import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import HeroDisplay from "./HeroDisplay";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function MyHeroesPage({ alignment }) {
  const { user, myHeroes, deleteMyHero } = useContext(HeroContext);

  return (
    // <motion.div
    //   initial="out"
    //   animate="in"
    //   exit="out"
    //   variants={animationOne}
    //   transition={transition}
    // >
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      className={alignment}
    >
      <h1 className="section-head">
        {user}'s {alignment === "good" ? "Heroes" : "Villains"}
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
            name={val.name}
            url={val.url}
            alignment={val.alignment}
            deleteMyHero={deleteMyHero}
          />
        );
      })}
    </motion.div>
    // </motion.div>
  );
}
