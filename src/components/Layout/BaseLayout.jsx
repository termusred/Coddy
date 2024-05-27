import styled from "styled-components"
import SideMenu from "../SideMenu/containers/SideMenu"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    background-color: #fffafa;
`
const ChildrenComponent = styled.div`
    transition: all 1s;
    margin-left: ${({theme , pinned}) => pinned? theme.width.BaseLayout.open : theme.width.BaseLayout.close};
`
const BaseLayout = ({children}) => {
    const [IsOpen , setIsOpen] = useState(false)
    const [Pinned , setPinned] = useState(false)
    const toggle = (InputType) =>{
        if(InputType == "button" && Pinned === false){
            setIsOpen(true)
            setPinned(!Pinned)
        }else if(InputType == "button" && Pinned === true){
            setIsOpen(false)
            setPinned(!Pinned)
        }
        if(InputType === "Enter" && Pinned === false){
            setIsOpen(true)
        }
        if(InputType === "Leave" && Pinned === false){
            setIsOpen(false)
        }

    }
    return(
        <Container>
            <SideMenu open={IsOpen} toggle={toggle}/>
            <ChildrenComponent  pinned={Pinned}>{children}</ChildrenComponent>
        </Container>
    )
}

export default BaseLayout