import * as React from 'react'
import { Button } from 'antd'
import './assets/index.css'

console.log(34344545656)

const img = require('./test.jpeg')

class App extends React.Component {
  render() {
    return (
      <div>
         <Button>w343434</Button>
         <img  src={img}/>
      </div>

    );
  }
}

export default App
