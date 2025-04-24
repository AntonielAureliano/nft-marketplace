import './App.css'

import { Banner, Heading, Card } from './components';

function App() {
  return (
    <div>
      <div className="container">
        <div>
          <Banner />
          <Heading level='h2'>Trending NFTs</Heading>
          <div className='container2'>
            <Card />
            <Card />
            <Card />
          </div>
          <Heading level='h2'>Recently Added</Heading>
          <div className='container2'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
