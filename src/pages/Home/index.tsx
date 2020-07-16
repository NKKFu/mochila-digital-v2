import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Header from '../../Components/Header'
import ContentLibrary, { Task } from '../../Components/ContentLibrary'
import { MdAssignmentReturned } from 'react-icons/md'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``;

interface Content {
    title: string;
    description: string;
    content?: string;
}

export const Home = () => {
    const [schoolContent, SetSchoolContent] = useState([]);
    const [Tasks, SetTasks] = useState<Content[]>([]);

    useEffect(() => {
        // Fetch content from school content
        const schoolIP = localStorage.getItem('@Mochila:directIP');

        if (schoolIP) {
            axios.get(schoolIP).then((response) => {
                console.log(
                    response.data
                )

            });
        }

        // TODO -> Remove this code [Test only]
        localStorage.setItem('@Mochila:storedContent', JSON.stringify([
        ] as Content[]));

        // Fetch content from user storage
        const storageContent = localStorage.getItem('@Mochila:storedContent');

        if (storageContent) {
            const content = JSON.parse(storageContent) as Content[];
            const newContentArray = content
                .map(({ content, ...keepAttrs }) => keepAttrs)
                .slice(0, 1);

            SetTasks(newContentArray);
        }

    }, []);

    return (
        <Container>
            <Header />
            <ContentLibrary>
                <header>
                    <h4>Sua biblioteca</h4>
                    <Link to="explore" className="explore-button">Ver Todos</Link>
                </header>
                {
                    Tasks.length > 0 ?
                        Tasks.forEach((task, index) => {
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
                            <p>Nenhum conteúdo foi armazenado ainda</p>
                        </div>
                }
            </ContentLibrary>
            <ContentLibrary>
                <header>
                    <h4>O que há na sua escola</h4>
                    {schoolContent && <Link to="exploreschool" className="explore-button">Explorar</Link>}
                </header>
                <div className="error">
                    <p>Não foi possível carregar os conteúdos<br />
                    Você está perto de sua escola?<br />
                        <Link to="configuration">Configurar acesso</Link>
                    </p>
                </div>
            </ContentLibrary>
        </Container >
    );
}