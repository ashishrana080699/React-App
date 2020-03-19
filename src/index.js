import React from 'react'
import ReactDOM from 'react-dom'
 
import AddComponent1 from './add.jsx'
 
class IndexComp extends React.Component  {
  render() {
    return(
      <div>
 
        {
          <div></div>
        }
 
        <AddComponent1 />
      </div>
    )
  }
}
 
ReactDOM.render(<IndexComp />, document.getElementById("root"))
