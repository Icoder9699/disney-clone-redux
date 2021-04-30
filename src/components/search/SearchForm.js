import { useContext, useState } from "react";
import styled from "styled-components"
import { AlertContext } from "../../context/alert/AlertContext";
import Alert from "../Alert";

// firebase cloud
import db from '../../firebase';
// redux
import { useDispatch } from "react-redux";
import {getMovies, clearMovies} from '../../app/features/movies/bySearchSlice';


const SearchForm = props =>{
    const {show, hide} = useContext(AlertContext);
    const [value, setValue] = useState('');
    // work with redux store 
    const dispatch = useDispatch();

    let moviesDB = [];

    const searchFrFirebase = (value) => {
        db.collection('movies').onSnapshot(snapshot => {// eslint-disable-next-line
            snapshot.docs.map(doc => { 
                const movieFrDB = doc.data().title.toLowerCase()
                if(movieFrDB.indexOf(value) > -1){
                    moviesDB = [...moviesDB, {id: doc.id, ...doc.data()}]
                }
                dispatch(getMovies({
                    movies: moviesDB
                }))
            })
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        moviesDB = [];
        if(!value){
            show('Write here something to search');
            dispatch(clearMovies())
            
        }else{
            searchFrFirebase(value);
            hide();
        }
    
    }

    const onChangeHandler = e => {
        setValue(e.target.value.toLowerCase())
    }

    return(
        <>
            <Alert />
            <Form onSubmit={submitHandler}>
                <Input 
                    placeholder='write something to search' 
                    onChange={onChangeHandler}    
                />
                <SearchBtn type="submit" onClick={submitHandler}>
                    Search
                </SearchBtn>
            </Form>
        </>
    )
}

export default SearchForm;

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    width: 500px;
    height: 30px;
    @media(max-width: 768px){
        width: 300px;
    }
`;

const Input = styled.input`
    padding-left: 10px;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 10px 0 0 10px;
    outline: none;
    &:hover, &:focus{
        border: 1px solid rgb(131, 218, 145);;
        box-shadow: 0 0 5px 2px rgb(131, 218, 145);
    }
`;

const SearchBtn = styled.button`
    border: 1px solid #ccc;
    background: transparent;
    color: #fff;
    width: 20%;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    &:hover, &:active{
        background-color: rgb(131, 218, 145);
        border: 1px solid rgb(131, 218, 145);;
        box-shadow: 0 0 5px 2px rgb(131, 218, 145);;
    }
`;