import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./listaTarefas.module.css";

const ListaTarefa: React.FC = () => {

  //a lista vai receber todos os itens que estiverem no localStorage
  const [lista, setLista] = useState<string[]>([]);

  //a navigate funciona para o redirecionamento de paginas
  const navigate = useNavigate();

  useEffect(() => {
    //local e um array para pegar os itens que estiverem no localStorage e colocar na lista
    const local: string[] = [];

    const tamanho = localStorage.length;

    for (let i = 0; i < tamanho; i++) {
      const item = localStorage.getItem((i + 1).toString());
      if (item) {
        local.push(item);
      }
    }

    setLista(local);
  }, []);


  const limpar = () => {
    if (window.confirm("Deseja realmente limpar a lista?")) {
      //ao limpar o localStorage a listagem tambem fica limpa
      localStorage.clear();
      navigate(0);
    }
  };

  const adicionar = () => {
    navigate("/novaTarefa");
  };

  const taboada = () => {
    navigate("/taboada");
  };

  return (
    <div className={Style.corpoLista}>
      <div></div>
      <div className={Style.tabela}>
        <div></div>
        <div className={Style.titulo}><h1>LISTA DE TAREFAS</h1></div>
        <div></div>
        <div></div>
        <div className={Style.lista}>
          <p>
            {lista.length === 0 ? (
              <div className={Style.vazio}>
                <p>Lista Vazia</p>
                {lista}
              </div>
            ) : (
              lista.map((id, index) => (
                <div key={index} className={Style.tarefa}>
                  <p>Tarefa Nº {index + 1}</p><p>{id}</p>
                </div>
              ))
            )}
          </p>
        </div>
        <div></div>
        <div></div>
        <div className={Style.btns}>
          <button className={Style.limpar} onClick={limpar}>Limpar Lista</button>
          <div></div>
          <button className={Style.adicionar} onClick={adicionar}>Adicionar</button>
          <div></div>
          <div>
            <button className={Style.taboada} onClick={taboada}>Taboada</button>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default ListaTarefa;

