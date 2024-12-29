"use client";
import { createContext, RefObject, useMemo, useRef, useState } from "react";

type ContextProps = {
  activeIndex: number;
  setActiveIndex: (v: number) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  scope: RefObject<HTMLDivElement>;
};

export const Context = createContext<ContextProps>({
  activeIndex: 2,
  setActiveIndex: () => {},
  isOpen: false,
  setIsOpen: () => {},
  isLoading: false,
  setIsLoading: () => {},
  scope: { current: null },
});

type ContextWrapperProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextWrapperProps) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scope = useRef<HTMLDivElement>(null);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      scope,
      isLoading,
      setIsLoading,
      activeIndex,
      setActiveIndex,
    }),
    [isOpen, isLoading, activeIndex]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
