import { useEffect, useState } from 'react';
import './Sucesso.scss';

export default function Sucesso() {
    const [userDetails, setUserDetails] = useState({ name: '', pontos: 0 });

    useEffect(() => {
        // Recupera os detalhes do usuário armazenados no localStorage
        const user = JSON.parse(localStorage.getItem('usuario'));
        
        // Verifica se os detalhes do usuário existem e atualiza o estado
        if (user) {
            setUserDetails({ name: user.name, pontos: user.pontos });
        }
    }, []);

    return (
        <div className="sucesso">
            <h2>Bem Vindo, {userDetails.name}!</h2>
            <p>Você possui {userDetails.pontos} pontos.</p>
        </div>
    );
}