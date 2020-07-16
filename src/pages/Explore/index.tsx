import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Backbutton from '../../Components/BackButton';
import ContentLibrary, { Task } from '../../Components/ContentLibrary';
import { MdAssignmentReturn } from 'react-icons/md';

interface ContentParams {
    content: string;
}

interface Content {
    title: string;
    description: string;
    content?: string;
}

const Explore: React.FC = () => {
    const [Contents, SetContent] = useState<Content[]>([]);
    const history = useHistory();

    useEffect(() => {
        const storedItems = localStorage.getItem('@Mochila:NKKFu');

        if (storedItems) {
            const contentsFromLocalStorage = JSON.parse(storedItems) as Content[];
            SetContent(contentsFromLocalStorage);
        }
    }, []);

    return (
        <div>
            <ContentLibrary>
                {
                    Contents.length > 0 ?
                        Contents.map((task, index) =>
                            <Task key={index} to={`content/${index}`}>
                                <div>
                                    <h2>{task.title}</h2>
                                    <p>{task.description}</p>
                                </div>
                                <MdAssignmentReturn size={50} />
                            </Task>
                        )
                        :
                        <div className="error">
                            <p>Nenhum conteúdo foi armazenado ainda</p>
                        </div>
                }
            </ContentLibrary>
            <Backbutton onClick={() => history.goBack()}>
                <p>VOLTAR</p>
            </Backbutton>
        </div>
    );
}

export default Explore;