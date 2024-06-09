import { Router } from 'react-router-dom'
import Container from 'pages/Container'
import history from 'utils/history'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Container />
      </div>
    </Router>
  )
}

export default App
