import { link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header className="header-container">
            <div className='logo'>Sistema de Clientes</div>
            <nav>
                <link to="/">Home</link>
                <link to="/cadastro">Cadastrar</link>
                <link to="/lista">Listar</link>
            </nav>
        </header>
    );
}

export default Header;