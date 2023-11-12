import './NossaCausa.scss'

export default function NossaCausa() {
    return(

        <div>
            <div className="nossa_causa">
            
            <p>
                Quais serão as consequências para o meio ambiente se houver um mal gerenciamento e descarte incorreto dos lixos em meios urbanos?
            </p>
        </div>

    <div className="divTopicos">
            <div className="topicos">
                <img src="imagens/solo.png" />

                <p>Poluição do solo e enchentes</p>
            </div>

            <div className="topicos">
                <img src="imagens/agua.png" />

                <p>Poluição da água</p>
            </div>

            <div className="topicos">
                <img src="imagens/ar.png" />

                <p className="arrumadinha">Poluição do ar</p>
            </div>

        <div className="topicos">
            <img src="imagens/recursos_humanos.png" />

            <p>Riscos para a saúde humana</p>
        </div>

        <div className="topicos">
            <img src="imagens/dinheiro.png" />

            <p className="arrumadinha">Impactos na economia</p>
        </div>

        <div className="topicos">
            <img src="imagens/reciclar.png" />

            <p>Dificuldades no manejo de resíduos</p>
        </div>
    </div>

    <div className="causa">
        <p>
            <span className="nossaCausa">A) </span>Poluição do ar: A queima de lixo em aterros mal gerenciados pode liberar gases tóxicos, como o dióxido de carbono, metano e óxidos de nitrogênio, que contribuem para o aquecimento global e a poluição do ar.
        </p>

        <p>
            <span className="nossaCausa">B) </span>Poluição da água: O descarte inadequado de lixo pode contaminar os corpos d´água próximos, prejudicando a vida marinha e a qualidade da água. Além disso, substâncias tóxicas podem se infiltrar no solo, contaminando os aquíferos subterrâneos.
        </p>

        <p>
            <span className="nossaCausa">C) </span>Emissão de gases de efeito estufa: Os aterros sanitários são responsáveis por cerca de 20% das emissões totais de metano, um gás de efeito estufa muito mais potente que o dióxido de carbono. Isso contribui para o aquecimento global e as mudanças climáticas.
        </p>

        <p>
            <span className="nossaCausa">D) </span>Prejuízos à saúde pública: O acúmulo de lixo em áreas urbanas pode atrair pragas como mosquitos, ratos e baratas, que podem transmitir doenças para os humanos.
        </p>

        <p>
            <span className="nossaCausa">E) </span>Degradação do solo: A disposição inadequada de lixo pode causar erosão do solo e a contaminação com produtos químicos tóxicos, tornando-o incapaz de sustentar a vida vegetal.
        </p>
    </div>
        </div>

        
    )
}