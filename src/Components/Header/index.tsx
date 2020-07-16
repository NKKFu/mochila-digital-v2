import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    background-color: #A5DEFF;
    color: #fff;
    padding: 30px 20px;
    max-height: 20vh;
    border-radius: 0 0 20px 20px;

    h1, h3 {
        font-weight: 500;

        b {
            color: #4ABFB8;
        }
    }

    span {
        margin: auto 0 auto auto;
        font-size: 40px;
    }
`;

const Header = () => {
    const [username, SetUsername] = useState('');

    useEffect(() => {
        const localUsername = localStorage.getItem('@Mochila:username');
        SetUsername(localUsername ? localUsername : 'aluno');
    }, []);

    return (
        <StyledHeader>
            <div>
                <h1>Oi, {username}</h1>
                <h3>Bem vindo ao <b>Mochila Digital</b></h3>
            </div>
            <span role="img" aria-label="Mochila">🎒</span>
        </StyledHeader>
    );
}


export default Header;