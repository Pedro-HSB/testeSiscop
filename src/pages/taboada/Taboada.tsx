import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./taboada.module.css";

const Taboada: React.FC = () => {

    //a taboada e o array onde ficara o resultado da multiplicação
    const [taboada, setTaboada] = useState<number[]>([]);

    //a numEntrada pega o valor do input
    const [numEntrada, setNumEntrada] = useState<string>("");

    //a navigate funciona para o redirecionamento de paginas
    const navigate = useNavigate();

    const calcular = () => {
        //um array criado para armazenar a multiplicação e colocar na taboada
        const listaTaboada: number[] = [];

        //caso o usuario não coloque valor
        if (numEntrada === "") {
            setNumEntrada("1");
            for (let i = 1; i <= 10; i++) {
                listaTaboada.push(i * 1);
            }
        } else {
            //pega o input e tranforma em INT
            const numero = parseInt(numEntrada);
            for (let i = 1; i <= 10; i++) {
                listaTaboada.push(i * numero);
            }
        }
        setTaboada(listaTaboada);
    };

    const retornar = () => {
        navigate("/");
    };

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
                    <div className={Style.numeros}>
                        <div></div>
                        <p>Digite o Numero e irá retornar a multiplicação dele de 1 a 10</p>
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
                        <p>{taboada.length === 0 ?
                            <></>
                            :
                            <>{taboada.map((id, index) => (
                                <div className={Style.listaNum} key={index}>
                                    <p>{index + 1} * {numEntrada} = {id}</p>
                                </div>
                            ))}</>}
                        </p>
                    </div>
                    <div></div>
                    <div className={Style.btns}>
                        <button className={Style.retornar} onClick={retornar}>Retornar</button>
                        <div></div>
                        <button className={Style.calcular} onClick={calcular}>Calcular</button>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Taboada;
