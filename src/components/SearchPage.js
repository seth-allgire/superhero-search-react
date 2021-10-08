import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import useFetch from "../hooks/useFetch";
import HeroDisplay from "./HeroDisplay";

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
    <>
      <h3 className="section-head">Search for Supers!</h3>
      <div className="form-section">
        <label className="form-label" htmlFor="search">
          Search:
        </label>
        <input
          className="form-input"
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          id="search"
          placeholder="name hero or villain"
        ></input>
        <div className="form-error">
          {formError &&
            queryInput.length < 3 &&
            "Name must contain at least 3 characters"}
        </div>
        <button
          className="form-button"
          onClick={() => {
            if (queryInput.length < 3) {
              setFormError(true);
              return;
            }
            setQuery(queryInput);
          }}
        >
          Search
        </button>
      </div>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {search && !loading && (
          <h3 className="section-head">Matching Heroes and Villains</h3>
        )}
        {search &&
          !loading &&
          search.map((val) => (
            <>
              <HeroDisplay
                isMyHero={myHeroes.some((hero) => hero.id === val.id)}
                // isMyVillain={myVillains.some((hero) => hero.alignment)}
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
    </>
  );
}
