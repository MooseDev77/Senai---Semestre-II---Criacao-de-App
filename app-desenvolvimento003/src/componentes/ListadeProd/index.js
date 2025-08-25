import react from 'react';
import './styles.css';

const ListarProd = ({ itens }) => {
    return (
        <ul className="lista-de-produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListarProd;