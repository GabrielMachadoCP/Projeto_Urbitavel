import { useState, useEffect } from 'react';
import './FormRodape.scss';

function FormRodape() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setError('Endereço de e-mail inválido');
    } else {
      setError('');
    }
  };

  const clearEmail = () => {
    setEmail('');
  };

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      setEmailSent(true);
      let storedEmails = JSON.parse(localStorage.getItem('userEmails')) || [];
      storedEmails.push(email);
      localStorage.setItem('userEmails', JSON.stringify(storedEmails));

      setTimeout(() => {
        clearEmail();
        setEmailSent(false);
      }, 3000);
    } else {
      setError('Endereço de e-mail inválido. Por favor, insira um e-mail válido.');
    }
  };

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem('userEmails')) || [];
    if (storedEmails.length > 0) {
      setEmail(storedEmails[storedEmails.length - 1]);
    }
  }, []);

  return (
    <div className="form-rodape-container">
      <h2>Cadastre-se abaixo!</h2> <br/>

      <p>Receba alertas de ações e novos conteúdos no seu e-mail.</p> <br/>

      <input
        type="email"
        className="emailInput"
        value={email}
        onChange={handleEmailChange}
        placeholder="exemplo@email.com"
      /> <br/>

      <button onClick={handleButtonClick} className="submit-button">
        Enviar E-mail
      </button>

      {error && <p className="error">{error}</p>}
      {emailSent && <p className="success">E-mail enviado!</p>}
    </div>
  );
}

export default FormRodape;
