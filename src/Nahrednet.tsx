import React from 'react';
import { styles } from "./styles";
import NavBar from './components/navBar';

function Nahrednet() {
  return (
    <div>
      <NavBar />
      <h1 className={styles.container}>My name is Alex Harris</h1>
    </div>
  );
}

export default Nahrednet;
