import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import useFetch from "../hooks/useFetch";
import HeroDisplay from "./HeroDisplay";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

export default function SearchPage() {
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const [formError, setFormError] = useState(false);
  const { data, error, loading } = useFetch(query);
  const { myHeroes, addMyHero, deleteMyHero, search, setSearch } =
    useContext(HeroContext);

  useEffect(() => {
    if (data) {
      setSearch(data);
    }
  }, [data, setSearch]);

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
            setQuery(queryInput);
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
                intel={val.intel}
                strength={val.strength}
                speed={val.speed}
                durability={val.durability}
                power={val.power}
                combat={val.combat}
                fullName={val.fullName}
                birthplace={val.birthplace}
                alignment={val.alignment}
                gender={val.gender}
                race={val.race}
                height={val.height}
                weight={val.weight}
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
