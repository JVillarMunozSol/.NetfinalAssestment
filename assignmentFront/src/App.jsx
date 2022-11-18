import './App.css'
import Principal from './principal/Principal'
import FormModal from './modal/FormModal'
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState("");

  return (
    <div className="App">
      <h1>Vehicles Claims</h1>
      <FormModal modal={modal} setModal={setModal}/>
      <Principal setModal={setModal}/>
    </div>
  )
}

export default App
