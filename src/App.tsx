import './App.css'

import Componente1 from './components/Componente1';
import Subtitle from './components/Subtitle';

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Componente1 />
          <Subtitle>Trending NFTs</Subtitle>
        </div>

      </div>
    </>
  )
}

export default App
