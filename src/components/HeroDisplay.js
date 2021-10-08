import React from "react";

export default function HeroDisplay({
  isMyHero,
  id,
  name,
  intel,
  strength,
  speed,
  durability,
  power,
  combat,
  fullName,
  birthplace,
  alignment,
  gender,
  race,
  height,
  weight,
  url,
  addMyHero,
  deleteMyHero,
}) {
  return (
    <div>
      <h2 className="section-head">{name}</h2>
      <img src={url} alt="hero-url" className="hero-img" />
      {!isMyHero && (
        <button onClick={() => addMyHero({ id, name, url, alignment })}>
          Add to My {alignment === "good" ? "Heroes" : "Villains"}
        </button>
      )}
      {isMyHero && (
        <button onClick={() => deleteMyHero(id, { alignment })}>
          Remove from My {alignment === "good" ? "Heroes" : "Villains"}
        </button>
      )}
    </div>
  );
}
