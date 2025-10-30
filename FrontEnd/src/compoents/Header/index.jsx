import {link} from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header-container">
            <div>Gerenciamento de Clientes</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/lista">Listar</Link>
            </nav>
        </header>
    );
}

export default Header;