import styled from "styled-components"
import logo from "../../../images/logo.png"
import {MoreHorizontal} from "react-feather"
import { Home } from "react-feather"
import { Award } from "react-feather"
import { Activity } from "react-feather"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    letter-spacing: 1px;
    top: 0px;
    padding: 1.5rem;
    padding-right: 0px;
    left: 0px;
    width: ${({theme , open}) => open? theme.width.SideMenu.open : theme.width.SideMenu.close};
    height: 100%; 
    color: white;
    transition: all 200ms;
    background-color: white;
`
const Logo = styled.img`
    width: 2.7rem;
    height: 2.6rem;
    cursor: default;
`
const SideMenuElement = styled.div`
    display: flex;
    /* margin-left: 10px; */
    padding: 0.6rem;
    align-items: center;
    gap: 2rem;
    width: ${({theme , open}) => open? theme.SideMenu.Open : theme.SideMenu.Close};
    margin-top: 1.52rem;
    transition: all 600ms;
    cursor: pointer;
    &.active{
        /* color: white; */
        border-radius: 4px;
        background: linear-gradient(to right, ${({theme , open}) => open? theme.SideMenu.OpenActive : theme.SideMenu.CloseActive},${({theme , open}) => open? theme.SideMenu.CloseActiveSec : theme.SideMenu.CloseActive});
    }
    &:hover {
        scale: 1.1;
        transition: all 300ms;
    }
    color: black;
    `
const LogoElement = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: row;
    cursor: default;
    `
const SideElementText = styled.span`

`
const LogoText = styled.span`
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({theme}) => theme.secondary};
`
const ElementsCon = styled.div`
`
const Impact = styled.span`
    color: #00CFE8;
`
const Filial = styled.div`
    margin-top: 1rem;
    margin-left: 10px;
    color: black;
    cursor: default;
`
const Pinner = styled.input`
    border-radius: 1rem;
    border: 1px solid black;
`
const SideMenu = ({open , toggle}) => {
    const navigate = useNavigate();
    
    return(
        <Container open={open} onMouseEnter={() => toggle("Enter")} onMouseLeave={() => toggle("Leave")}>         
            <LogoElement>
                <Logo src={logo}/>
                {open && <LogoText>CoddyCamp</LogoText>}
                {open && <Pinner type="radio" onClick={() => toggle("button")}></Pinner>}
            </LogoElement>
            <ElementsCon>
                <Filial open={open}>
                    {!open && <MoreHorizontal size={22}/>}
                    {open && <SideElementText>Filial:<Impact>Impact</Impact></SideElementText>}
                </Filial>
                <SideMenuElement open={open} onClick={() => navigate("/")} className={location.pathname === "/" ? "active" : ""}>
                    <Home size={22}/>
                    {open && <SideElementText className={location.pathname === "/" ? "active" : ""}>Uyga vazifalar</SideElementText>}
                </SideMenuElement>
                <SideMenuElement open={open} onClick={() => navigate("/test")} className={location.pathname === "/test" ? "active" : ""}>
                    <Award size={22}/>
                    {open && <SideElementText className={location.pathname === "/test" ? "active" : ""}>Natijalarim</SideElementText>}
                </SideMenuElement>
                <SideMenuElement open={open} onClick={() => navigate("/nu")} className={location.pathname === "/nu" ? "active" : ""}>
                    <Activity size={22}/>
                    {open && <SideElementText className={location.pathname === "/nu" ? "active" : ""}>Coinlar tarixi</SideElementText>}
                </SideMenuElement>
            </ElementsCon>
        </Container>
    )
}
export default SideMenu