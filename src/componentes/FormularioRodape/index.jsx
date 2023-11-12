import { useState, useEffect } from 'react';
import './FormRodape.scss'

function FormRodape() {
  // Estado para armazenar o endereço de e-mail
  const [email, setEmail] = useState('');

  // Estado para controlar a exibição da mensagem de confirmação
  const [emailSent, setEmailSent] = useState(false);

  // Estado para armazenar mensagens de erro de validação
  const [error, setError] = useState('');

  // Função para validar o endereço de e-mail
  const validateEmail = (email) => {
    // Expressão regular simples para verificar se o e-mail tem um formato válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função para lidar com a mudança no endereço de e-mail
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Verifica se o e-mail é válido e define a mensagem de erro, se necessário
    if (!validateEmail(newEmail)) {
      setError('Endereço de e-mail inválido');
    } else {
      setError('');
    }
  };

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    // Verifica se o e-mail é válido antes de prosseguir
    if (validateEmail(email)) {
      // Você pode adicionar aqui a lógica de envio do e-mail, se necessário
      // Por enquanto, apenas definimos o estado para exibir a mensagem
      setEmailSent(true);
    } else {
      setError('Endereço de e-mail inválido. Por favor, insira um e-mail válido.');
    }
  };

  // Efeito para carregar o endereço de e-mail do localStorage quando o componente é montado
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // Efeito para salvar o endereço de e-mail no localStorage quando ele é alterado
  useEffect(() => {
    localStorage.setItem('userEmail', email);
  }, [email]);

  return (
    <div className="form-rodape-container">
      <h2>Cadastre-se abaixo!</h2>

      <p>Receba alertas de ações e novos conteúdos no seu e-mail.</p>

      <input
        type="email"
        id="emailInput"
        value={email}
        onChange={handleEmailChange}
        placeholder="exemplo@email.com"
      />
      <button onClick={handleButtonClick} className="submit-button">Enviar E-mail</button>
      {error && <p className="error">{error}</p>}
      {emailSent && <p className="success">E-mail enviado!</p>}
    </div>
  );
}

export default FormRodape;
