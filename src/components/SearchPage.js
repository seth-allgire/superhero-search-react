import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { HeroContext } from "../shared/HeroContext";
// import useFetch from "../hooks/useFetch";
import HeroDisplay from "./HeroDisplay";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

//HOW TO CHANGE THIS TO WORK WITH AXIOS HOOK???????
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
        json.data.map((hero) => ({
          hero_id: hero.id,
          name: hero.name,
          // intel: hero.powerstats.intelligence,
          // strength: hero.powerstats.strength,
          // speed: hero.powerstats.speed,
          // durability: hero.powerstats.durability,
          // power: hero.powerstats.power,
          // combat: hero.powerstats.combat,
          // fullName: hero.biography["full-name"],
          // birthplace: hero.biography["place-of-birth"],
          alignment: hero.biography.alignment,
          // gender: hero.appearance.gender,
          // race: hero.appearance.race,
          // height: hero.appearance.height,
          // weight: hero.appearance.weight,
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
            <>
              <HeroDisplay
                isMyHero={myHeroes.some((hero) => hero.id === val.id)}
                key={val.id}
                id={val.id}
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
                // gender={val.gender}
                // race={val.race}
                // height={val.height}
                // weight={val.weight}
                url={val.url}
                addMyHero={addMyHero}
                deleteMyHero={deleteMyHero}
              ></HeroDisplay>
            </>
          ))}
      </div>
    </motion.div>
  );
}
