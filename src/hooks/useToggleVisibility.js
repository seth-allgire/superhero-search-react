import { useState } from "react";

const useToggleVisibility = (component, visibility = false) => {
  const [visible, setVisibility] = useState(() => visibility);

  return [visible ? component : null, () => setVisibility((v) => !v)];
};

export default useToggleVisibility;
