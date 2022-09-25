import React, { useState } from "react";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Buscador } from "./Buscador";
import { Filtros } from "./Filtros";
import { Select } from "./Select";

export const Cardapio = () => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className="menu">
        <Logo />
      </nav>
      <header className="header">
        <div className="header__text">A casa do código massa</div>
      </header>
      <section className="cardapio">
        <h3 className="cardapio-title">Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className="cardapio__filtros">
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Select />
        </div>
      </section>
    </main>
  );
};
