import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Task = styled(Link)`
    text-decoration: none;
    color: #4a4a4a;
    display: flex;
    background-color: #e8e8e8;
    border-radius: 5px;
    
    div {
        padding: 20px 0 20px 20px;
        width: 80%;
    }

    svg {
        margin: auto;
        color: #949494;
    }
`;


const ContentLibrary = styled.div`
    margin: 20px;

    & + div {
        margin-top: 50px;
    }

    header {
        display: flex;
        
        h4 {
            color: #B0B0B0;
            margin-bottom: 15px;
        }

        .explore-button {
            text-decoration: none;
            font-weight: bold;
            color: #7FE8EF;
            margin-left: auto;
        }
    }

    a {
        & + a {
            margin-top: 20px;
        }
    }

    .error {
        display: flex;
        flex-direction: column;
        background-color: #e8e8e8;
        color: #B0B0B0;
        height: 256px;
        border-radius: 5px;
        text-align: center;

        p {
            margin: auto;
        
            a { 
                color: #6e8ab8;
                text-decoration: none;
                font-weight: bolder;
                margin: 0 auto auto auto;
            }
        }
    }
`;

export default ContentLibrary;