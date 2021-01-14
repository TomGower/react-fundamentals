// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const [error, setError] = React.useState(null);
  // const inputElement = React.useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const inputName = event.target.elements.usernameInput.value;
    // const inputName = inputElement.current.value;
    // onSubmitUsername(inputName);
    onSubmitUsername(inputName);
  }
  
  const handleChange = event => {
    const val = event.target.value;
    const isValid = val === val.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* <input type="text" id="usernameInput" ref={inputElement} onChange={handleChange} /> */}
        <input type="text" id="usernameInput" onChange={handleChange}></input>
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
