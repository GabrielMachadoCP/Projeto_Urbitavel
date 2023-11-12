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
            method: 'PATCH', // Utilize PATCH para atualizar apenas os pontos
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pontos: 0 }), // Atualiza apenas os pontos
        })
            .then((response) => {
                if (response.ok) {
                    setPointsReset(true);
                    setUserDetails((prevUserDetails) => ({ ...prevUserDetails, pontos: 0 }));
                    setTimeout(() => {
                        window.location = "/login"; // Redireciona para a página de login após 5 segundos
                    }, 5000);
                }
            })
            .catch((error) => {
                console.error('Erro ao resetar os pontos', error);
            });
    };

    return (
        <div className="sucesso">
            <h2>Bem Vindo, {userDetails.name}!</h2>
            <p>Você possui {userDetails.pontos} pontos.</p>
            <button onClick={resetPoints}>Retirar Pontos</button>
            {pointsReset && <p>Pontos retirados com sucesso!</p>}
        </div>
    );
};

export default Sucesso;
