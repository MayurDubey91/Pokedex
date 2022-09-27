import React from "react";
import styles from "../scss/header.module.scss";
// Header component - logo and headline, using plan text as logo, imported header scss module
const Header = () => {
  return (
    <div
      className={
        styles.header + " -flex -left-to-right -nowrap -middle-aligned"
      }
    >
      <div className={styles.logo + " -flex-column"}>
        <a href="/">Pokédex</a>
      </div>
      <div className={styles.separator + " -flex-column"}></div>
      <h1 className={styles.headline + " -flex-column -resize"}>
        Search for any Pokémon that exixts on the planet
      </h1>
    </div>
  );
};

export default Header;
