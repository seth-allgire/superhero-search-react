import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { HeroContext } from "../shared/HeroContext";
import HeroDisplay from "./HeroDisplay";
import { Button, Alert, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { opacityAnmtn, transition } from "../animations";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
      console.log(json);
      setSearch(() =>
        json.results.map((hero, idx) => ({
          hero_id: hero.id,
          name: hero.name,
          key: idx,
          intel: hero.powerstats.intelligence,
          strength: hero.powerstats.strength,
          speed: hero.powerstats.speed,
          durability: hero.powerstats.durability,
          power: hero.powerstats.power,
          combat: hero.powerstats.combat,
          alterEgo: hero.biography["full-name"],
          publisher: hero.biography.publisher,
          firstAppear: hero.biography["first-appearance"],
          alignment: hero.biography.alignment,
          url: hero.image.url,
        }))
      );
    } else if (json === error) return;

    console.log(json);
  }, [json, setSearch, error]);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={opacityAnmtn}
      transition={transition}
    >
      <div className="form-container">
        <div className="form-surround red-border">
          <div className="form-container form-title icon">
            <SearchOutlinedIcon sx={{ fontSize: "50px" }} />
          </div>
          <div className="form-container form-title">Search for Supers</div>
          <div className="form-container">
            <input
              className="form-input"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              id="search"
              name="search"
              placeholder="enter character here"
            ></input>
            <div className="form-error">
              {formError && queryInput.length < 3 && (
                <Alert severity="error">
                  Search must be at least 3 characters
                </Alert>
              )}
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

            {/* <div>LOADING</div>
            )} */}
            <div className="form-error">
              {error && !loading && (
                <Alert severity="error">Character name not found</Alert>
              )}
              {/* ) && <div>{error}</div>} */}
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        {loading && <CircularProgress sx={{ color: "#144e75" }} />}
      </div>
      <div>
        {/* {loading && <div>LOADING</div>}
        {error && !loading && <Alert severity="error">{error}</Alert>} */}
        {/* ) && <div>{error}</div>} */}
        {search &&
          !loading &&
          search.map((val) => (
            <HeroDisplay
              isMyHero={myHeroes.some((hero) => hero.hero_id === val.hero_id)}
              key={val.hero_id}
              // id={val.id}
              hero_id={val.hero_id}
              name={val.name}
              intel={val.intel}
              strength={val.strength}
              speed={val.speed}
              durability={val.durability}
              power={val.power}
              combat={val.combat}
              alterEgo={val.alterEgo}
              publisher={val.publisher}
              firstAppear={val.firstAppear}
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
