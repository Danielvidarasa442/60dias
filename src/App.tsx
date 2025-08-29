import  { useState } from 'react';
import './App.css'; 
import ebookCapa from './assets/ebook-capa.jpg';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const kiwifyLink = "https://pay.kiwify.com.br/u7MsP18";

  return (
    <div className="main-wrapper"> 
      <header>
        <nav>
          <h1>The Natural</h1>
        </nav>
        <section className="hero">
          <div className="hero-content fade-in">
            <h2>Emagrecer em 60 Dias</h2>
            <p>Transforme seu corpo e sua vida com nosso método 100% natural.</p>
            {/* Imagem acima do botão em desktop */}
            <div className="hero-image-desktop">
                <img src={ebookCapa} alt="Capa do eBook" />
            </div>
            {/* Botão para a Kiwify */}
            <a href={kiwifyLink} className="btn zoom" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          {/* A imagem original agora só aparece em dispositivos móveis */}
          <div className="hero-image-mobile fade-in">
            <img src={ebookCapa} alt="Capa do eBook" />
          </div>
        </section>
      </header>

      <main>
        <section className="beneficios fade-in">
          <h3>O que você vai aprender:</h3>
          <ul>
            <li>Receitas rápidas e saudáveis</li>
            <li>Treinos que cabem na sua rotina</li>
            <li>Estratégias de emagrecimento eficazes</li>
            <li>Resultados reais em 60 dias</li>
          </ul>
          {/* O botão da seção de benefícios foi removido */}
        </section>

        <section className="detalhes fade-in">
          <h3>Detalhes do eBook</h3>
          <p>O eBook contém passo a passo completo, com dicas práticas para você perder peso de forma natural e sustentável.</p>
        </section>

        <section className="receitas-treinos fade-in">
          <h3>Exemplo de Conteúdo</h3>
          <div className="cards">
            <div className="card zoom">
              <h4>Receita Fit</h4>
              <p>Uma das receitas deliciosas e fáceis de preparar do eBook.</p>
            </div>
            <div className="card zoom">
              <h4>Treino em Casa</h4>
              <p>Treino de 20 minutos que você consegue fazer sem equipamentos.</p>
            </div>
          </div>
        </section>

        <section className="depoimentos fade-in">
          <h3>O que nossos leitores dizem</h3>
          <div className="cards">
            <div className="card">
              <p>"Perdi 7kg em 2 meses, sem sofrimento!"</p>
              <span>- Ana, 32 anos</span>
            </div>
            <div className="card">
              <p>"As receitas são incríveis e fáceis de preparar."</p>
              <span>- Marcos, 28 anos</span>
            </div>
            <div className="card">
              <p>"Treinos rápidos e super eficientes."</p>
              <span>- Juliana, 35 anos</span>
            </div>
          </div>
        </section>

        <section className="faq fade-in">
          <h3>Perguntas Frequentes</h3>
          <div className="faq-item">
            <h4 onClick={() => toggleFaq(0)}>Funciona mesmo em 60 dias?</h4>
            <p style={{ display: openFaq === 0 ? 'block' : 'none' }}>Sim! Seguindo as orientações e aplicando as receitas e treinos, você verá resultados.</p>
          </div>
          <div className="faq-item">
            <h4 onClick={() => toggleFaq(1)}>É seguro?</h4>
            <p style={{ display: openFaq === 1 ? 'block' : 'none' }}>100% natural. Sem medicamentos, hormônios ou suplementos perigosos.</p>
          </div>
          <div className="faq-item">
            <h4 onClick={() => toggleFaq(2)}>Posso comprar pelo Pix?</h4>
            <p style={{ display: openFaq === 2 ? 'block' : 'none' }}>Sim! Todas as formas de pagamento disponíveis: cartão, Pix e boleto.</p>
          </div>
        </section>

        <section id="comprar" className="comprar fade-in">
          <h3>Garanta já o seu!</h3>
          <a href={kiwifyLink} target="_blank" className="btn zoom" rel="noopener noreferrer">Comprar</a>
          <p>Pagamento seguro via cartão, Pix ou boleto. Entrega imediata do PDF após a compra.</p>
        </section>
      </main>

      <footer>
        <p>© 2025 The Natural. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
