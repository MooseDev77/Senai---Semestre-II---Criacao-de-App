// src\componentes\infoaluno\index.jsx
import './styles.css';

function Infoaluno() {
    const nome = "João Silva";
    const idade = 20;
    const curso = "Analise de Dados";

    return (
        <div className="Infoaluno">
            <h2>Informações do Aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>  
    );
}

export default Infoaluno;