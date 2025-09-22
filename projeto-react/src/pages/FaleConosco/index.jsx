// src\pages\FaleCanosco\index.jsx

import './style.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!');
    }

    return (
        <section className="contato">
            <h1>fale conosco</h1>
            <p>Tire suas dúvidas e peça um orçamento sem compromisso</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <spam>Nome: </spam>
                        <input type="text" name="name" placeholder="Seu nome" required />
                    </label>
                        <label className='field'>
                        <spam>E-mail: </spam>
                        <input type="email" name="Você@exemplo.com" required />
                    </label> 
                    <label className='field'>
                        <spam>Telefone: </spam>
                        <input type="tel" placeholder='(00) 00000-0000' required /> 
                    </label>
                    </div>

                        <label className='field'>
                            <spam>Assunto: </spam>
                            <textarea rows="6" placeholder='Escreva sua mensagem aqui...' required></textarea>
                        </label>
                        <button className='btn primary' type='submit'>Enviar</button>
                    </form>    
        </section>
    )
}    

export default FaleConosco;