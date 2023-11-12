import './Apoie.scss'

export default function Apoie() {

    return (
        <main>
            <div className="apoio">
                <p className="titulo">Doe agora mesmo.</p> <br />

                <p>Precisamos de ajuda para proteger a terra</p>

                <img src="imagens/lixos_brancos.jpg" /> <br/><br/>

                <p>Qualquer valor é bem-vindo!</p>

                <p>Insira o valor que você gostaria de doar:</p> <br/>

                <form>
                    <fieldset>
                        <label></label>
                        <input type="number" name="valor" className="c-valor" min="0" step="0.01" placeholder="R$" />
                    </fieldset> <br/>

                    <input type="submit" value="Realizar doação" className="btnDoacao" />
                </form>
            </div>
        </main>
    )
}