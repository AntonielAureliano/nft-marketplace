import './App.css'

import Component1 from './components/Component1';
import { Heading } from './components/Heading';
import Component2 from './components/Component2';

function App() {
  return (
    <div className='bgApp'>
      <div className="container">
        <div>
          <Component1 />
          <Heading level='h2'>Trending NFTs</Heading>
          <div className='container2'>
            <Component2 />
            <Component2 />
            <Component2 />
          </div>
          <Heading level='h2'>Recently Added</Heading>
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
