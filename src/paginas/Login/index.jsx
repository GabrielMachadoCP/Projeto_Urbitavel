import { useState, useEffect } from "react";
import "./Login.scss";

export default function Login() {
  const [msgstatus, setMsgstatus] = useState("");
  const [classStatus, setClassStatus] = useState("");

  //Vai receber os dados do FORMULÁRIO!!!
  //É um OBJETO!!!
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = async (e) => {
    //Destructuring
    const { name, value } = e.target;
    //Preenchendo o Objeto através do
    //useState utilizando o evento OnCHange e
    //Operador SPREAD(...)
    setUsuario({ ...usuario, [name]: value });
  };

  useEffect(() => {
    if (msgstatus == "Login realizado com SUCESSO!!") {
      setClassStatus("login-sucesso");
    } else if (msgstatus == "Usuário e ou Senha incorretos!") {
      setClassStatus("login-erro");
    } else {
      setClassStatus("login");
    }
  }, [msgstatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        console.log(users);
        for (let x = 0; x < users.length; x++) {
          const u = users[x];

          //Realizando a validação de fato;
          if (u.email == usuario.email && u.senha == usuario.senha) {
            user = u;
            break;
          }
        }
        // Após a validação do login com sucesso e antes do redirecionamento para a página de sucesso
        if (user) {
          // Armazena os dados do usuário no localStorage
          localStorage.setItem("usuario", JSON.stringify(user));
          setMsgstatus("Login realizado com SUCESSO!!");
          setTimeout(() => {
            window.location = "/sucesso";
          }, 5000);
        }
        if (user) {
          //Redirecionando o usuário para HOME!
          setMsgstatus("Login realizado com SUCESSO!!");
          setTimeout(() => {
            window.location = "/sucesso";
          }, 5000);
        } else {
          //Limpando o form caso a validação falhe!

          setMsgstatus("Usuário e ou Senha incorretos!");

          setTimeout(() => {
            setMsgstatus("");

            setUsuario({
              email: "",
              senha: "",
            });

            window.location = "/login";
          }, 5000);
        }
      } else {
        //Limpando o form caso a validação falhe!
        setUsuario({
          email: "",
          senha: "",
        });
        window.location = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logiN">
      <h2>Seja bem-vinde a sua página de login!</h2> <br/><br/>

      <h3 className={classStatus}>{msgstatus}</h3>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="idEmail">Email: </label>
              <input
                className="c-usuario"
                type="email"
                name="email"
                id="idEmail"
                placeholder=" Digite o seu email..."
                value={usuario.email}
                onChange={handleChange}
              />
            </div> <br/>

            <div>
              <label htmlFor="idSenha">Senha: </label>
              <input
                className="c-senha"
                type="password"
                name="senha"
                id="idSenha"
                placeholder=" Digite a sua senha..."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div> <br/>

            <div>
              <button className="btnLogin">LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
