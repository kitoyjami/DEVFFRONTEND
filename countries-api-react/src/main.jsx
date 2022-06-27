import { createRoot } from 'react-dom/client'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
// components

// Router
import Paths from './routes'
import { BrowserRouter } from 'react-router-dom'

// contextProvider
import { ContextProvider } from './context'

const root = document.getElementById('root')
const container = createRoot(root)
container.render(
  <ContextProvider>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </ContextProvider>
)
