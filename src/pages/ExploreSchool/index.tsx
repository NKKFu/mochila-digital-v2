import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import axios from 'axios'

import Backbutton from '../../Components/BackButton';
import ContentLibrary, { Task } from '../../Components/ContentLibrary';
import { MdAssignmentReturn, MdAssignmentReturned } from 'react-icons/md';

interface ContentParams {
    content: string;
}

interface Content {
    title: string;
    description: string;
    content?: string;
}

const Container = styled.div`
    .alert-tab {
        margin: 20px;
        text-align: center;
    }
`;

const ExploreSchool: React.FC = () => {
    const [contents, SetContent] = useState<Content[]>([]);
    const [response, SetResponse] = useState('pending');

    const history = useHistory();

    // TODO -> Adicionar função de explorar escola

    useEffect(() => {
        const schoolIPAdress = localStorage.getItem('@Mochila:IPAdress');

        if (!schoolIPAdress) {
            SetResponse('error');
            return;
        }

        axios.get(schoolIPAdress).then((responseFromAxios) => {
            const fetchedContents = responseFromAxios.data as Content[];
            SetResponse('sucess');
            SetContent(fetchedContents);
        }).catch(err => {
            console.error(err);
            SetResponse('error');
        })
    }, []);

    return (
        <Container>
            <div className="alert-tab">
                {response === 'pending' && <p>Carregando..</p>}
                {response === 'error' && <p>Não foi possível carregar os conteúdos <br /> Você está perto de sua escola?</p>}
                {response === 'success' && <p>Clique nos conteúdos que você<br /> quiser adicionar à sua bibliota</p>}
            </div>

            <ContentLibrary>
                {
                    contents.length > 0 ?
                        contents.map((task, index) => {
                            return (
                                <Task key={index} to={`content/${index}`}>
                                    <div>
                                        <h2>{task.title}</h2>
                                        <p>{task.description}</p>
                                    </div>
                                    <MdAssignmentReturned size={50} />
                                </Task>
                            )
                        })
                        :
                        <div className="error">
                            <p>Nenhum conteúdo foi encontrado</p>
                        </div>
                }
            </ContentLibrary>

            <Backbutton onClick={() => history.goBack()}>
                <p>VOLTAR</p>
            </Backbutton>
        </Container>
    );
}

export default ExploreSchool;