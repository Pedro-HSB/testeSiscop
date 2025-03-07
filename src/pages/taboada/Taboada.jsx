import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Style from "./taboada.module.css";

function Taboada() {

    const [taboada, setTaboada] = useState([]);
    const [numEntrada, setNumEntrada] = useState("");
    const navigate = useNavigate();


    const calcular = () => {
        
        const listaTaboada = [];
        if (numEntrada == "") {
            setNumEntrada(1)
            for (let i = 1; i <= 10; i++) {
                listaTaboada.push(i * 1);
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                listaTaboada.push(i * numEntrada);
            }
        }
        setTaboada(listaTaboada);
    };

    const retornar = () => {
        navigate("/")
    }
    return (
        <>
            <div className={Style.corpoTarefa}>
                <div></div>
                <div className={Style.tabela}>
                    <div></div>
                    <div></div>
                    <div className={Style.titulo}>
                        <h1>TABOADA</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div className={Style.desc}>
                        <div></div>
                        <p>Digite o Numero e irá retornar a multiplicação dele até o 10</p>
                        <p>Numero:</p>
                        <input
                            type="number"
                            placeholder="Digite um Numero"
                            required
                            value={numEntrada}
                            onChange={e => setNumEntrada(e.target.value)} />
                    </div>
                    <div></div>
                    <div className={Style.lista}>
                        <p>{taboada == "" ?
                            <></>
                            :
                            <>{taboada.map((id, index) => (<>
                                <div className={Style.listaNum}>
                                    <p key={index}>{index} * {numEntrada} = {id}</p>
                                </div>
                            </>))}</>}
                        </p>
                    </div>
                    <div></div>
                    <div className={Style.btns}>
                        <button className={Style.retornar} onClick={retornar}>Retornar</button>
                        <div></div>
                        <button className={Style.calcular} type="submit" onClick={calcular}>Calcular</button>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Taboada