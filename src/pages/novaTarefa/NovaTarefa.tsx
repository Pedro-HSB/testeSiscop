import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./novaTarefa.module.css";

const NovaTarefa: React.FC = () => {

    //a desc pega o valor do input para colocar no localStorage
    const [desc, setDesc] = useState<string>("");

    //a lista pega o tamanho do array caso já exista
    const [lista, setLista] = useState<string>("");

    //a navigate funciona para o redirecionamento de paginas
    const navigate = useNavigate();

    const salvar = () => {
        //caso o usuario não digite valor
        if (desc === "") {
            localStorage.setItem("1", JSON.stringify("Valor Não Informado"));
            navigate("/");
        } else {
            localStorage.setItem(lista, JSON.stringify(desc));
            navigate("/");
        }
    };

    const cancelar = () => {
        navigate("/");
    };

    const descInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //pego o valor digitado no input e o tamanho atual do localStorage
        if (lista === "") {
            setLista((localStorage.length + 1).toString());
        }
        setDesc(e.target.value);
    };

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
                            placeholder="Coloque Aqui a Descrição Da Sua Nova Tarefa"
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
    );
}

export default NovaTarefa;
