import { useState } from 'react'
import FullscreenButton from './components/fullscreenbutton';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <div className="h-screen flex justify-center items-center">
            <FullscreenButton />
        </div>
    </>
  )
}

export default App
