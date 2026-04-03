import {  useEffect, useRef, } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" className='text-2xl ref-error' />;
}

export default App
