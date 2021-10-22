import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState([]);
  const [myHeroes, setMyHeroes] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const clickToShow = useCallback(() => {
    setShowDiv(!showDiv);
  }, [showDiv, setShowDiv]);

  useEffect(() => {
    async function getMyHeroes() {
      const { data } = await axios.get(`/api/myHeroes/user/${user.id}`);
      if (!data.success) return;
      setMyHeroes(data.data);
    }
    if (user.id) {
      getMyHeroes();
    }
  }, [user]);

  const addMyHero = useCallback(
    async (hero) => {
      const { data } = await axios.post("/api/myHeroes/add", {
        ...hero,
        user_id: user.id,
      });
      setMyHeroes((curr) => {
        return [...curr, data.data];
      });
    },
    [setMyHeroes, user]
  );

  const deleteMyHero = useCallback(
    async (id) => {
      const { data } = await axios.delete(`/api/myHeroes/delete/${id}`);
      setMyHeroes((curr) => {
        return curr.filter((val) => val.id != data.data);
      });
    },
    [setMyHeroes]
  );

  const clearState = useCallback(() => {
    setUser({});
    setSearch([]);
    setMyHeroes([]);
  }, [setUser, setSearch, setMyHeroes]);

  return (
    <HeroContext.Provider
      value={{
        user,
        search,
        myHeroes,
        showDiv,
        setShowDiv,
        clickToShow,
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
