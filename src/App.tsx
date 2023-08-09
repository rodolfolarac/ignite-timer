import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

import { Button } from "./components/Button"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button/>
      <Button variant="success"/>
      <Button variant="danger"/>
    </ThemeProvider>
  )
}

export default App
