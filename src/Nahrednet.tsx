import React from 'react';
import { styles } from "./styles";
import NavDriver from './components/ui/navDriver';

function Nahrednet() {
  return (
    <div>
      <NavDriver />
      <h1 className={styles.container}>My name is Alex Harris</h1>
    </div>
  );
}

export default Nahrednet;
