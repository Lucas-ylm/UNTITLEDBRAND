"use client";
import { useAppContext } from "../context/useAppContext";
import styles from "./burger.module.scss";

export default function Burger() {
  const { isOpen, setIsOpen } = useAppContext();

  return (
    <button
      className={`${styles.wrapper} ${isOpen ? styles.isMenu : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span />
    </button>
  );
}
