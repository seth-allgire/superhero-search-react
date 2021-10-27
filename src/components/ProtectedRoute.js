import React, { useContext, useMemo } from "react";
import { Redirect, Route } from "react-router";
import { HeroContext } from "../shared/HeroContext";

export default function ProtectedRoute({ children, path, shielded }) {
  const { user } = useContext(HeroContext);
  const redirectTo = useMemo(
    () => (shielded ? "/login" : "/search"),
    [shielded]
  );

  if ((user.username && shielded) || (!user.username && !shielded)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return (
      <Route path={path}>
        <Redirect to={redirectTo}></Redirect>
      </Route>
    );
  }
}
