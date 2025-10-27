// src\compoents\Footer\index.jsx
import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - todods os os direitos reservados.</p>
               <br /> Desenvolvido por Senai.
            <p/>
        </footer>
    );
}

export default Footer;