import { Apresentacao } from "./components/Apresentacao"
import { Cabecalho } from "./components/Cabecalho"
import { Rodape } from "./components/Rodape"
import { Skills } from "./components/Skills"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Projetos } from "./components/Projetos"

function App() {

  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Apresentacao />
      <SobreMim />
      <Skills />
      <Projetos />
      <Rodape />
    </>
  )
}

export default App
