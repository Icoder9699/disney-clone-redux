import { useContext } from 'react';
import styled from 'styled-components'
import {AlertContext} from '../context/alert/AlertContext';

const Alert = props => {
    //  get alert context ===== context.consumer 
    const {hide, alert} = useContext(AlertContext);

    if(!alert){
        return null
    }

    return (
        <Container>
            {alert.text}
            <DeleteBtn onClick={hide}>
                &times;
            </DeleteBtn>
        </Container>
    )
}

const Container = styled.div`
    max-width: 700px;
    margin: 10px auto !important;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f5c6cb;
    display: flex;
    padding: 5px 15px;
    font-weight: 300;
    background-color: rgba(255, 169, 169, 0.513);
    color: #721c24;
`;

const DeleteBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
`;

export default Alert;