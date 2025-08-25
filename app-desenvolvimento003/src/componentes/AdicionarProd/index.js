import React, { userState } from 'react';
import './styles.css';

const adicionarProduto = ({ onAdicionar }) => {
    const [texto, settexto] = userState("");

    const enviar = (e) => {
        e.preventDefault();
        onAdicionar(texto);
        settexto("");
    }
    
    return (
        <from className="form" onsubmit={enviar}>
            <input
              type= "text"
              value={texto}
              onCanPlayThroughCapture={(e) => settexto(e.target.value)}
                placeholder="Adicionar produto..."
                />
                <button type="submit">Adicionar</button>
                </from>
    );
}