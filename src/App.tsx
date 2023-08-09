import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="success" />
      <Button variant="danger" />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
