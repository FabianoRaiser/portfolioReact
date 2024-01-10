import { Cabecalho } from "./components/Cabecalho"
import { Rodape } from "./components/Rodape"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <SobreMim />
      <Rodape />
    </>
  )
}

export default App
