import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

import Backbutton from '../../Components/BackButton';

const Container = styled.div`
    div {
        padding: 20px;

        input {
            width: 100%;
            border: 0;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 5px;
            font-size: 16px;
        }

        p {
            font-size: 14px;
            color: #b5b5b5;
            font-weight: bolder;    
            margin-bottom: 20px;
        }

        button {
            margin-top: 50px;
            font-size: 18px;
            background-color: #33d62b;
            color: #0b6b06;
            font-weight: bolder;
            padding: 10px 20px;
            border: 0;
            border-radius: 5px;
        }
    }
`;

const Configuration: React.FC = () => {
    const [IPAdress, SetIPAdress] = useState('');
    const [username, SetUsername] = useState('aluno');
    const history = useHistory();

    useEffect(() => {
        const currentIPAdress = localStorage.getItem('@Mochila:IPAdress');
        const currentUsername = localStorage.getItem('@Mochila:username');

        console.log(currentIPAdress);
        

        if (currentIPAdress)
            SetIPAdress(currentIPAdress);

        if (currentUsername)
            SetUsername(currentUsername);
    }, []);

    function handleUpdateConfiguration() {
        localStorage.setItem('@Mochila:IPAdress', IPAdress);
        localStorage.setItem('@Mochila:username', username);
    }

    return (
        <Container>
            <div>
                <input value={IPAdress} type="text" placeholder="IP escolar.." onChange={(newValue) => SetIPAdress(newValue.target.value)} />
                <p>Não mude por conta própria, peça autorização de sua escola</p>

                <input value={username} type="text" placeholder="Seu nome aqui.." onChange={(newValue) => SetUsername(newValue.target.value)} />
                <p>Como você quer ser chamado?</p>

                <button onClick={handleUpdateConfiguration}>Salvar configurações</button>
            </div>

            <Backbutton onClick={() => history.goBack()}>
                <p>VOLTAR</p>
            </Backbutton>
        </Container>
    );
}

export default Configuration;