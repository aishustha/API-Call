import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WindowTracker from "./windowTracker";

export default function App(){
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log("component rendered")

  //sideEffects


  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  React.useEffect(() => {
    console.log("Effect function ran")
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count])

    return (
      <div>
    
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount+1)}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

        <div>
          <button onClick={toggle}> 
            Toggle Window Tracker
          </button>
          {show && <WindowTracker />}
        </div>
      </div>
    )
  }
ReactDOM.render(<App/>, document.getElementById('root'));

