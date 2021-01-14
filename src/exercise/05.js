// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>
const Box = ({ size, color }) => 
  <div className={`box box--${size}`} style={{fontStyle: 'italic', backgroundColor: color}}>{size} {color} box</div>

function App() {
  // return (
  //   <div>
  //     {smallBox}
  //     {mediumBox}
  //     {largeBox}
  //   </div>
  // )

  // basic exercise
  // return (
  //   <div>
  //     <div className='box box--small' style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}>small lightblue box</div>
  //     <div className='box box--medium' style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</div>
  //     <div className='box box--large' style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</div>
  //   </div>
  // )

  // extra credit 1
  return (
    <div>
      <Box size="small" color="lightblue" />
      <Box size="medium" color="pink" />
      <Box size="large" color="orange" />
    </div>
  )
}

export default App
