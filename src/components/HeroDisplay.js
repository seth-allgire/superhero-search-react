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
      <h3 className="section-head">Matching Heroes and Villains</h3>
      <h2 className="section-head">{name}</h2>
      <img src={url} alt="hero-url" />
    </div>
  );
}
