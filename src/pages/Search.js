import styled from "styled-components";
import Items from "../components/search/Items";
import SearchForm from "../components/search/SearchForm";

const Search = props =>{ 

    return (
        <Container>
            <SearchForm/>
            <Items/>
        </Container>
    )
};

const Container = styled.div`
    padding: 71px 20px 0 20px;
    height: 100vh;
    background: url("/images/search/background.jpg") 0 0/100% 100% no-repeat;
    @media(max-width: 768px){
        background-size: cover;
    }
`;

export default Search;