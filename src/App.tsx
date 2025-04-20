import './App.css'

import Component1 from './components/Component1';
import Subtitle from './components/Subtitle';
import Component2 from './components/Component2';

function App() {
  return (
    <div className='bgApp'>
      <div className="container">
        <div>
          <Component1 />
          <Subtitle>Trending NFTs</Subtitle>
          <div className='container2'>
            <Component2 />
            <Component2 />
            <Component2 />
          </div>
          <Subtitle>Recently Added</Subtitle>
          <div className='container2'>
            <Component2 />
            <Component2 />
            <Component2 />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
