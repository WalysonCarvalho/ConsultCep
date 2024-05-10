import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "../api";



export function ConsultCep() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    //01310930/json
    if (input === "") {
      alert("Preencha com algum Cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops, erro ao buscar. Cep não encontrado.");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep.. "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> 
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FF5374" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>Cep:{cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}
