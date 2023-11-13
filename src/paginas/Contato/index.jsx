import { useState } from 'react';
import './Contato.scss'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Dados armazenados com sucesso!');
  };

  return (
    <div className='comunicacao'>
      <form onSubmit={handleSubmit}>
        <h2 className="tituloComunic">Canal de Comunicação</h2> <br/>

        <p>
            Entre em contato com nós via e-mail. <br/>
            Responderemos o mais rápido possível!
        </p> <br/><br/>

        <label className="infos">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          className="c-nome"
        /> <br/><br/><br/>

        <label className="infos">E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="c-email2"
        /> <br/><br/><br/>

        <label className="mensagemEscrita">Escreva sua Mensagem/Dúvida:</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleInputChange}
          className="c-duvida"
        /> <br/><br/>

        <button className='btncomunicacao' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
