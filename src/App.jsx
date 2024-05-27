import { ThemeProvider } from "styled-components"
import GlobalStyle from "./constants/globalStyles"
import { Light } from "./constants/theme"
import RoutesContainer from "./components/routes"

function App({routes}) {

  return (
    <>
      <ThemeProvider theme={Light}>
        <GlobalStyle/>
        <RoutesContainer routes={routes}></RoutesContainer>
      </ThemeProvider>
    </>
  )
}

export default App
