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
      <img src={url} alt="hero-url" />
      {!isMyHero && (
        <button onClick={() => addMyHero({ id, name, url })}>
          Add to My Heroes
        </button>
      )}
      {isMyHero && (
        <button onClick={() => deleteMyHero(id)}>Remove from My Heroes</button>
      )}
    </div>
  );
}
