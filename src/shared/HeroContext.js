import React, { useCallback, useState } from "react";

export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  // const [account, setAccount] = useState("");
  // const [accountPswd, setAccountPswd] = useState("");
  const [user, setUser] = useState({});
  // const [password, setPassword] = useState("");
  const [search, setSearch] = useState([]);
  const [myHeroes, setMyHeroes] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const clickToShow = useCallback(() => {
    setShowDiv(!showDiv);
  }, [showDiv, setShowDiv]);

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

  const clearState = useCallback(() => {
    setUser({});
    setSearch([]);
    setMyHeroes([]);
  }, [setUser, setSearch, setMyHeroes]);

  return (
    <HeroContext.Provider
      value={{
        // account,
        // accountPswd,
        user,
        // password,
        search,
        myHeroes,
        showDiv,
        setShowDiv,
        clickToShow,
        // setAccount,
        // setAccountPswd,
        setUser,
        // setPassword,
        setSearch,
        addMyHero,
        deleteMyHero,
        // logoutUser,
        clearState,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}
