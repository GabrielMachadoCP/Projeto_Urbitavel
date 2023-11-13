import { useEffect, useState } from 'react';
import './Sucesso.scss';

const Sucesso = () => {
    const [userDetails, setUserDetails] = useState({ id: '', name: '', pontos: 0 });
    const [pointsReset, setPointsReset] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('usuario'));

        if (user) {
            setUserDetails({ id: user.id, name: user.name, pontos: user.pontos });
        }
    }, []);

    const resetPoints = () => {
        fetch(`http://localhost:5000/usuarios/${userDetails.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pontos: 0 }),
        })
            .then((response) => {
                if (response.ok) {
                    setPointsReset(true);
                    setUserDetails((prevUserDetails) => ({ ...prevUserDetails, pontos: 0 }));
                    setTimeout(() => {
                        window.location = "/login";
                    }, 4000);
                }
            })
            .catch((error) => {
                console.error('Erro ao resetar os pontos', error);
            });
    };

    return (
        <div className="sucesso">
            <h2>Bem-vinde, {userDetails.name}!</h2> <br/><br/>

            <h3>Você possui: {userDetails.pontos} pontos.</h3> <br/><br/>

            <button onClick={resetPoints} className="btnRetirada">Retirar Pontos</button> <br/>

            {pointsReset && <p>Pontos retirados com sucesso!</p>}
        </div>
    );
};

export default Sucesso;
