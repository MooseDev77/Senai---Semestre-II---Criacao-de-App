// src\pages\Home\index.jsx
import { Link } from 'react-router-dom'
import './style.css'
import hero from '../../assets/hero.png'
import office from '../../assets/office.png'

function Home() {
    return (
        <div className="home">
            <section className='hero'>
                <div className='hero_text'>
                    <h1>Contabilidade descomplicada para seu negócio</h1>
                    <p>Economize tempo e foque no que importa. Cuidamos da sua folha, impostos e obrigações com tecnologia e atendimento humanizado</p>
                    <div className='hero_cta'>
                        <Link to="/Serviços" className='btn primary'>Conheça nossos Serviços</Link>
                        <Link to="/FaleConosco" className='btn light'>Fale com um especialista</Link>
                    </div>
                </div>
                <div className='hero_image'>
                    <img src={hero} alt="Equipe de contabilidade" />
                </div>
            </section>

            <section className='Features'>
                <h2>Por que nos escolher</h2>
                <div className='grid cls-3'>
                    <div className='card'>
                        <h3>Atendimento prioritário</h3>
                        <p>Suporte rápido pelo whatApp, e-mail e reuniões onile.</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Interação com bancos e plataformas para autotimazar lançamentos e reduzir erros.</p>
                    </div>
                    <div className='card'>
                        <h3>Planejamento tributário</h3>
                        <p>Escolha o regime ideial e estratégias legais para pegar menos impostos.</p>
                    </div>
                </div>
            </section>

            <section className='socialProof'>
                <div className='socialProof_image'>
                    <img src={office} alt='Escritório da empresa.' />
                </div>
                <div className='socialProof_text'>
                    <h2>Mais de 200 empresas atendidas</h2>
                    <p>De MEIs a pequenas e médias empresas em todo o brasil. Cases em comécio, serviços e tecnologia.</p>
                </div>
            </section>
        </div>
    )
}
export default Home