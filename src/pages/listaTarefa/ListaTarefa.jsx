import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Style from "./listaTarefas.module.css";

function ListaTarefa() {

    const local = []
    const [lista, setLista] = useState("");
    const navigate = useNavigate();

    if (lista == "" & localStorage.length !== 0) {
        setLista(localStorage.length)
    }
    if (lista == 1) {
        local.push(localStorage.getItem(1))
    } else if (local == "" & lista !== 0) {
        for (let i = 0; i < lista; i++) {
            local.push(localStorage.getItem(i + 1))
        }
    }


    const limpar = () => {
        if (window.confirm("Deseja realmente limpar a lista?")) {
            localStorage.clear()
            navigate(0)
        }
    }

    const adicionar = () => {
        navigate("/novaTarefa")
    }

    const taboada = () => {
        navigate("/taboada")
    }
    return (
        <>
            <div className={Style.corpoLista}>
                <div></div>
                <div className={Style.tabela}>
                    <div></div>
                    <div className={Style.titulo}><h1>LISTA DE TAREFAS</h1></div>
                    <div></div>
                    <div></div>
                    <div className={Style.lista}>
                        <p>{local == "" ?
                            <><div className={Style.vazio}>
                                <p>Lista Vazia</p>
                            </div></>
                            :
                            <>{local.map((id, index) => (<>
                                <div className={Style.tarefa}>
                                    <p>Tarefa Nº {index + 1}</p><p>{id}</p>
                                </div>
                            </>))}</>}
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
        </>
    )
}

export default ListaTarefa