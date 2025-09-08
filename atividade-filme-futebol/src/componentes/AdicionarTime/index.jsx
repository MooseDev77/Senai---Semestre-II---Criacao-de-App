// src\componentes\AdicionarTime\index.jsx

import { useState } from "react";
import "./style.css";
import logo from "../../assets/image/logo.png";   

function InfoJogador() {
    // Estados para os campos do formulário
    const [jogador, setJogador] = useState('');
    const [numero, setNumero] = useState('');

    // Estado para lista de jogadores cadastrados
    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();

        // Validação simples
        if (!jogador.trim() || !numero.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Adiciona o jogador na lista
        setListaJogadores([...listaJogadores, { jogador, numero }]);

        // Limpa os campos para o próximo cadastro
        setJogador('');
        setNumero('');
    }   

    return (
        <>
            <img src={logo} alt="logo da empresa" className="cliente-icone" />
            <div className="info-cliente">
                <h2>Cadastro de Jogadores</h2>
                <form onSubmit={adicionarJogador}>
                    <div>
                        <label>Jogador:</label>
                        <input 
                            type="text" 
                            value={jogador} 
                            onChange={(e) => setJogador(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Número da Camisa:</label>
                        <input 
                            type="number" 
                            value={numero} 
                            onChange={(e) => setNumero(e.target.value)} 
                            required 
                            min="0"
                        />
                    </div>
                    <button type="submit">Adicionar Jogador</button>
                </form>

                <hr />

                <h3>Lista de Jogadores</h3>
                <ul>
                    {listaJogadores.map((item, index) => (
                        <li key={index}>
                            {item.jogador} - Camisa {item.numero}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    ); 
}

export default InfoJogador;