import Botao from "../../componentes/Botao";
import styles from './Inicio.module.css'

export default function Inicio() {
    return (
        <main>
            <div className={styles.containerApresentacao}>
                <div className={styles.explicacao}>
                    <h2>URBITÁVEL</h2>

                    <p>
                        O projeto Urbitável é uma iniciativa coletiva de estudantes da FIAP, Que busca apresentar uma solução sustentável, relativa a um dos problemas ambientais mais ocorridos pelo mundo todo:  
                    </p>

                    <p>
                        O inadequado descarte dos lixos e substratos prejudiciais ao ambiente em meios urbanos.
                    </p>

                    <p>
                        Se trata, portanto, de uma ideia interventiva que tem como objetivo recompensar a população urbana por descartar corretamente os seus lixos, através do programa consciente de descarte.
                    </p>
                </div>

                <div className={styles.foto}>
                    <img src="./imagens/lixo.jpg" alt="latas de lixo reciclável" />
                </div>
            </div>

            <div className={styles.intro}>
                <h2>Lutamos pela saúde do planeta que habitamos</h2>

                <h3>Juntos, podemos mudar o mundo!</h3> <br/>
                    
                <p>
                    Se você quer defender o planeta e se somar às pessoas que atuam para proteger o meio ambiente, aqui é o seu lugar!
                </p>

                <p>
                    Nós acreditamos que um mundo mais verde, pacífico e justo para todas as formas de vida é possível, e não poupamos esforços para alcançá-lo.
                </p>

                <p>
                    Temos décadas de ativismo que muito nos ensinou e que nos mostra que ainda temos muito o que fazer.
                </p>
                
                <Botao>
                    Saiba quem somos
                </Botao>
                {/* <a href="/sobre" className={styles.btnSaibamais}>Saiba quem somos</a> */}
            </div>

        </main>
    )
}