import React, { useCallback, useState } from "react";

export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [account, setAccount] = useState("");
  const [accountPswd, setAccountPswd] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
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
    setPassword("");
    setSearch("");
    setMyHeroes([]);
  }, [setUser, setPassword, setSearch, setMyHeroes]);
  //add state and functions to share

  return (
    <HeroContext.Provider
      value={{
        account,
        accountPswd,
        user,
        password,
        search,
        myHeroes,
        setAccount,
        setAccountPswd,
        setUser,
        setPassword,
        setSearch,
        addMyHero,
        deleteMyHero,
        logoutUser,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}
