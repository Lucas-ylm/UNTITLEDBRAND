import { useContext } from "react";
import { Context } from "./Context";

export const useAppContext = () => {
  const context = useContext(Context);

  if (context == null) {
    throw new Error("Components must be wrapped in <Context.Provider />");
  }

  return context;
};
