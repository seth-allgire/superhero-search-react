import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import HeroDisplay from "./HeroDisplay";

export default function MyHeroesPage() {
  const { user, myHeroes, deleteMyHero } = useContext(HeroContext);

  return (
    <div>
      <h3 className="section-head">{user}'s Heroes</h3>
      {myHeroes.map((val) => (
        <HeroDisplay
          isMyHero={true}
          key={val.id}
          id={val.id}
          name={val.name}
          url={val.url}
          deleteMyHero={deleteMyHero}
        />
      ))}
    </div>
  );
}
