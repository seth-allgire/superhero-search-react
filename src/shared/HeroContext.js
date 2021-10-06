import React, { useCallback, useState } from "react";

export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [acctUser, setAcctUser] = useState("");
  const [user, setUser] = useState("");
  const [search, setSearch] = useState([]);
  const [myHeroes, setMyHeroes] = useState([]);

  const addMyHero = useCallback(
    (hero) => {
      setMyHeroes((curr) => [...curr, hero]);
    },
    [setMyHeroes]
  );

  const deleteMyHero = useCallback(
    (id) => {
      setMyHeroes((curr) => curr.filter((val) => id !== val.id));
    },
    [setMyHeroes]
  );

  const logoutUser = useCallback(() => {
    setUser("");
    setSearch("");
    setMyHeroes([]);
  }, [setUser, setSearch, setMyHeroes]);
  //add state and functions to share

  return (
    <HeroContext.Provider
      value={{
        acctUser,
        setAcctUser,
        user,
        setUser,
        search,
        setSearch,
        myHeroes,
        addMyHero,
        deleteMyHero,
        logoutUser,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}
