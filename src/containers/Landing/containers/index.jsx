import styled from "styled-components"
import {User} from "react-feather"
const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
const Navbar = styled.div`
    display: flex;
    width: 80%;
    height: 8%;
    margin-top: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 15px 0px rgba(59, 59, 59, 0.75);
    -webkit-box-shadow: 0px 4px 15px 0px rgba(77, 73, 73, 0.75);
    -moz-box-shadow: 0px 4px 15px 0px rgba(71, 71, 71, 0.75);
`
const Coins = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    gap: 1rem;
    height: 100%;
`
const UserCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 50%;
    cursor: pointer;
    gap: 1rem;
    margin-right: 1rem;
    height: 100%;
`
const CoinIcon = styled.img`
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
`
const CoinsText = styled.span`
    font-weight: 650;
    font-size: small;
    cursor: default;
`
const UserName = styled.span`
    font-weight: 600;
`
const Landing = () => {
    return(
        <Container>
            <Navbar>
                <Coins>
                    <CoinIcon src="https://go.coddycamp.uz/core/template_med/app-assets/images/icons/Coins.png"></CoinIcon>
                    <CoinsText>45415 coin</CoinsText>
                </Coins>
                <UserCon>
                    <UserName>Shohakbar Abidov</UserName>
                    <User size={25}></User>
                </UserCon>
            </Navbar>
        </Container>
    )
}

export default Landing