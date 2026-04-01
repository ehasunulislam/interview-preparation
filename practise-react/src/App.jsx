import {  useEffect, useRef, } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default App
