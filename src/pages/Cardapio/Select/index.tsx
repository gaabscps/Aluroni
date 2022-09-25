import React, { useState } from "react";
import opcoes from "./opcoes.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const Select = () => {
  const [aberto, setAberto] = useState(false);

  return (
    <button
      className="ordenador"
      onBlur={() => {
        setAberto(false);
      }}
      onClick={() => setAberto(!aberto)}
    >
      <span>Ordenar por</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={
          aberto === true
            ? "ordenador__options ordenador__options--ativo"
            : "ordenador__options"
        }
      >
        {opcoes.map((opcao) => (
          <div className="ordenador__option" key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
};
