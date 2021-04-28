import styled from 'styled-components';

const Login = props => {
    return(
        <Container>
                <BgImage/>
            <Content>
                <CTA>
                    <LogosTop src='/images/cta/cta-logo-one.svg' alt='logos'/>
                    <SignUp>Get All There</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <LogosBottom src='/images/cta/cta-logo-two.png' alt='logos'/>
                </CTA>
            </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: flex;
    heigth: 100vh;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const LogosTop = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
    background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const LogosBottom = styled.img`
    width: 100%;
    object-fit: cover;
`;

const BgImage = styled.div`
    bacground-size: cover;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;
