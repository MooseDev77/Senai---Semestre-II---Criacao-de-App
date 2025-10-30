// src\compoents\Footer\index.jsx
import './styles.css';

function Footer() {
    return (
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} - Desenvolvedores - SENAI Dedenzeiros</p><p/>
        </footer>
    )
}

export default Footer;