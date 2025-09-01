// src\componentes\INFOCURSO\index.jsx
import './styles.css'; 
function INFOCURSO() {
    const nome = "Analíse de Dados";
    const duracao = 24; // duração em meses
    const local = "Online";
    const inicio = "2024-08-01";
    const fim = "2026-08-01";
    
    return (
        <div className="INFORCURSO">
            <h3>Informações do Aluno</h3>
            <p>Nome: {nome}</p>
            <p>Idade: {duracao}</p>
            <p>Curso: {local}</p>
            <p>Curso: {inicio}</p>
            <p>Curso: {fim}</p>
        </div>  
    );
}
export default INFOCURSO;
