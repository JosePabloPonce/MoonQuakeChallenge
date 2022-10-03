import './App.css';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function App() {
  // This reference gives us direct access to the THREE.Mesh object


  const[people, setPeople] = useState([]);
  useEffect(()=>{
    axios.get('/api').then(res => setPeople(res.data));
  }, []);


  const pureba =  people.map((p, index) => {
    return <p key={index}> {p.id} {p.name} {p.age}</p>
  })

  return (
    
    
    <div className="App">
      <header className="App-header">
        <h2>
          MOONQUAKE MAP
        </h2>
        {
          pureba
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
