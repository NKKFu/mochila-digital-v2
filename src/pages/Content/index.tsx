import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import styled from 'styled-components'

import ReactMarkdown from 'react-markdown/with-html';
import Backbutton from '../../Components/BackButton';

interface ContentParams {
    content: string;
}

interface Content {
    title: string;
    description: string;
    content?: string;
}

const ContentContainer = styled.div`
    padding: 20px;
`;

const Content: React.FC = (props) => {
    const history = useHistory();

    const { params } = useRouteMatch<ContentParams>();
    const { content: ContentIndex } = params;

    const storedItems = localStorage.getItem('@Mochila:NKKFu');

    if (!storedItems)
        return <h1>Error on load</h1>

    const taskContents = JSON.parse(storedItems) as Content[];
    const taskContent = taskContents[Number.parseInt(ContentIndex)];

    return (
        <>
            <ContentContainer>
                <h1>{taskContent.title}</h1>
                <hr style={{ margin: "20px 0"}} />
                <ReactMarkdown escapeHtml={false} source={taskContent.content}></ReactMarkdown>
            </ContentContainer>
            <Backbutton onClick={() => history.goBack()}>
                <p>VOLTAR</p>
            </Backbutton>
        </>
    );
}

export default Content;