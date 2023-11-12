import { Col, Container, Row } from "react-grid-system"
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho"

const backgrounStyles = {
    backgroundImage: 'url(imagens/fundinho.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
}


const LayoutBase = () => {
    return (
        <div style={backgrounStyles}>
            <Cabecalho>
                <Container>
                    <Row>
                        <Col>
                        <h1>URBITÁVEL</h1> <img src="/imagens/fundinho.png" />
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
        </div>
    )
}