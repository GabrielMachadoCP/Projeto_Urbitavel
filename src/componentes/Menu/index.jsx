import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header className={styles.container}>

            <div className={styles.logo}>

                <h1>URBITÁVEL</h1>

                <img src="./imagens/logo.png" alt='Logo da nossa organização' />

            </div>

            <nav className={styles.navegacao}>

            <div className={styles.ul}>

                <Link className={styles.link} to="/">
                    <a>Página Inicial</a>
                </Link>

                <Link className={styles.link} to="/sobre">
                    <a>Sobre Nós</a>
                </Link>

                <Link className={styles.link} to="/nossacausa">
                    <a>Por Trás da Causa</a>
                </Link>

                <Link className={styles.link} to="/privacidade">
                    <a>Privacidade</a>
                </Link>

                <Link className={styles.link} to="/contato">
                    <a>Fale Conosco</a>
                </Link>

                <Link className={styles.link} to="/login">
                    <a>Minha Conta</a>
                </Link>

                <Link className={styles.link} to="/apoie">
                    <a className={styles.simbApoie}>Apoie</a>
                </Link>
                
            </div>

            </nav>
        </header>
    )
}