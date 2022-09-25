import React from "react";
import { CgSearch } from "react-icons/cg";

interface BuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export const Buscador = ({ busca, setBusca }: BuscadorProps) => {
  return (
    <div className="buscador">
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        type="text"
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
};
