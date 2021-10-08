import { useEffect, useState } from "react";

export default function useFetch(search) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://superheroapi.com/api.php/10158661060025819/search/${search}`;
    if (search.length < 3) {
      return;
    }
    async function init() {
      try {
        const response = await fetch(url);

        const json = await response.json();

        setData(() =>
          json.results.map((hero) => ({
            id: hero.id,
            name: hero.name,
            intel: hero.powerstats.intelligence,
            strength: hero.powerstats.strength,
            speed: hero.powerstats.speed,
            durability: hero.powerstats.durability,
            power: hero.powerstats.power,
            combat: hero.powerstats.combat,
            fullName: hero.biography["full-name"],
            birthplace: hero.biography["place-of-birth"],
            alignment: hero.biography.alignment,
            gender: hero.appearance.gender,
            race: hero.appearance.race,
            height: hero.appearance.height,
            weight: hero.appearance.weight,
            url: hero.image.url,
          }))
        );
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [search]);

  return { data, error, loading };
}
