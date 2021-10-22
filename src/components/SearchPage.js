import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { HeroContext } from "../shared/HeroContext";
// import useFetch from "../hooks/useFetch";
import HeroDisplay from "./HeroDisplay";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const heroURL = `https://superheroapi.com/api.php/10158661060025819/search/`;

export default function SearchPage() {
  const { myHeroes, addMyHero, deleteMyHero, search, setSearch } =
    useContext(HeroContext);
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const [formError, setFormError] = useState(false);
  const { json, error, loading } = useAxios(query, "get");

  useEffect(() => {
    if (json) {
      setSearch(() =>
        json.results.map((hero, idx) => ({
          hero_id: hero.id,
          name: hero.name,
          key: idx,
          // intel: hero.powerstats.intelligence,
          // strength: hero.powerstats.strength,
          // speed: hero.powerstats.speed,
          // durability: hero.powerstats.durability,
          // power: hero.powerstats.power,
          // combat: hero.powerstats.combat,
          // fullName: hero.biography["full-name"],
          // birthplace: hero.biography["place-of-birth"],
          alignment: hero.biography.alignment,
          url: hero.image.url,
        }))
      );
    }
  }, [json, setSearch]);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1 className="section-head page-title">Search for Supers!</h1>
      <div className="form-container">
        <label className="form-label" htmlFor="search">
          Name of Super:
        </label>
        <input
          className="form-input"
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          id="search"
          name="search"
          placeholder="enter character here"
        ></input>
        <div className="form-error">
          {formError &&
            queryInput.length < 3 &&
            "Name must contain at least 3 characters"}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (queryInput.length < 3) {
              setFormError(true);
              return;
            }
            setQuery(heroURL + queryInput);
          }}
        >
          Search
        </Button>
      </div>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
            <HeroDisplay
              isMyHero={myHeroes.some((hero) => hero.hero_id === val.hero_id)}
              key={val.hero_id}
              id={val.id}
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
              addMyHero={addMyHero}
              deleteMyHero={deleteMyHero}
            ></HeroDisplay>
          ))}
      </div>
    </motion.div>
  );
}
