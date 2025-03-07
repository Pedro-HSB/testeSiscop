import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Style from "./novaTarefa.module.css";

function NovaTarefa() {

    const [desc, setDesc] = useState("");
    const [lista, setLista] = useState("");
    const navigate = useNavigate();

    const salvar = () => {
        localStorage.setItem(lista, JSON.stringify(desc))
        navigate("/")
    }

    const cancelar = () => {
        navigate("/")
    }

    const descInput = (e) => {
        if (lista == "") {
            setLista(localStorage.length + 1)
        }
        setDesc(e.target.value)
    }

    return (
        <>
            <div className={Style.corpoTarefa}>
                <div></div>
                <div className={Style.tabela}>
                    <div></div>
                    <div></div>
                    <div className={Style.titulo}>
                        <h1>NOVA TAREFA</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div className={Style.desc}>
                        <p>Descrição:</p>
                        <input
                            type="text"
                            value={desc}
                            onChange={descInput} />
                    </div>
                    <div className={Style.btns}>
                        <button className={Style.cancelar} onClick={cancelar}>Cancelar</button>
                        <div></div>
                        <button className={Style.salvar} onClick={salvar}>Salvar</button>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default NovaTarefa