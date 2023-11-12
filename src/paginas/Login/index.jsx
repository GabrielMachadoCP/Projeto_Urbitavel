import './Login.scss'

export default function Login() {
    return(
        <div>
            <div className="login">
                <h2>Seja bem-vindo a sua página de login</h2> <br/><br/>
        
                <form action="login" name="login" method="get">
                    <fieldset>
                    <label htmlFor="c-usuario">Usuário: </label>
                    <input type="text" name="usuario" id="c-usuario"/> <br/>
        
                    <label htmlFor="c-senha">Senha:</label>
                    <input type="password" name="senha" id="c-senha"/> <br/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}