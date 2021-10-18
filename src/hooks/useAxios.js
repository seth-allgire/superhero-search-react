import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(url, method, body = null) {
  const [json, setJson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const url = `https://superheroapi.com/api.php/10158661060025819/search/${search}`;
    // if (search.length < 3) {
    //   return;
    // }
    async function init() {
      if (!url || (method === "post" && !body)) {
        return;
      }
      setLoading(true);
      setJson(null);
      setError(null);
      try {
        const response = await axios[method](url, body);

        setJson(response.data);

        // setData(() =>
        //   json.results.map((hero) => ({
        //     id: hero.id,
        //     name: hero.name,
        //     intel: hero.powerstats.intelligence,
        //     strength: hero.powerstats.strength,
        //     speed: hero.powerstats.speed,
        //     durability: hero.powerstats.durability,
        //     power: hero.powerstats.power,
        //     combat: hero.powerstats.combat,
        //     fullName: hero.biography["full-name"],
        //     birthplace: hero.biography["place-of-birth"],
        //     alignment: hero.biography.alignment,
        //     gender: hero.appearance.gender,
        //     race: hero.appearance.race,
        //     height: hero.appearance.height,
        //     weight: hero.appearance.weight,
        //     url: hero.image.url,
        //   }))
        // );
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url, body, method]);

  return { json, error, loading };
}
