import React from "react";
import filtros from "../Filtros/filtros.json";

type IOpcao = typeof filtros[0];

interface FiltrosProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Filtros = ({ filtro, setFiltro }: FiltrosProps) => {
  const SelecionarFiltro = (opcao: IOpcao) => {
    opcao.id === filtro ? setFiltro(null) : setFiltro(opcao.id);
  };

  return (
    <div className="filtros">
      {filtros.map((opcao) => (
        <button
          className={`${
            filtro === opcao.id
              ? "filtros__filtro filtros__filtro--ativo"
              : "filtros__filtro"
          }`}
          key={opcao.id}
          onClick={() => SelecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};
