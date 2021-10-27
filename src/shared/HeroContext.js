import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState([]);
  const [myHeroes, setMyHeroes] = useState([]);

  useEffect(() => {
    async function verify() {
      try {
        const { data: json } = await axios.get("/api/users/verify");
        if (json.success) {
          setUser(json.data);
        }
      } catch (e) {}
    }
    verify();
  }, []);

  useEffect(() => {
    async function getMyHeroes() {
      const { data } = await axios.get(`/api/myHeroes/user`);
      if (!data.success) return;
      setMyHeroes(data.data);
    }
    if (user.username) {
      getMyHeroes();
    }
  }, [user]);

  const addMyHero = useCallback(
    async (hero) => {
      const { data } = await axios.post("/api/myHeroes/add", {
        ...hero,
      });
      setMyHeroes((curr) => {
        return [...curr, data.data];
      });
    },
    [setMyHeroes]
  );

  const deleteMyHero = useCallback(
    async (id) => {
      const { data } = await axios.delete(`/api/myHeroes/delete/${id}`);
      setMyHeroes((curr) => {
        return curr.filter((val) => val.hero_id != data.data);
      });
    },
    [setMyHeroes]
  );

  const clearState = useCallback(async () => {
    try {
      await axios.get("/api/users/logout");
      setUser({});
      setSearch([]);
      setMyHeroes([]);
    } catch (e) {}
  }, [setUser, setSearch, setMyHeroes]);

  return (
    <HeroContext.Provider
      value={{
        user,
        search,
        myHeroes,
        setUser,
        setSearch,
        addMyHero,
        deleteMyHero,
        clearState,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}
