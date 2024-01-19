import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUsername] = useState('')

  useEffect(() =>{
    getUsername()
  },[])

  const getUsername = async () =>{
    const response = await axios.get('/names')
    setUsername(response.data)
  }
  return (
    <div>
      HOMEPAGE NOTHING TO SEEcek HERE {userName }
    </div>
  );
}

export default App;
