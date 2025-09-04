// src\Componentes\AdicionarAluno\index.jsx

import { useState } from 'react';
import './styles.css';

function AdicionarAluno(onAdicionarAluno) {
    const [usuario, setusuario] = useState('')
    const [idade, setIdade] = useState('')

    const addAluno = (event) => {
        event.preventDefault()
        
        onAdicionarAluno(usuario, idade)
        setusuario('')
        setIdade('')
    }

    return (
    <>
        <form onSubmit={addAluno}>
            <h2>Adicionar Aluno</h2>
            <input 
                type="text" 
                placeholder="Nome do aluno"
                value={usuario}
                onChange={(event) => setusuario(event.target.value)}
            />
            <input 
                type="number"
                placeholder="Idade do aluno"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form> 
        </>
    );
}

export default AdicionarAluno;