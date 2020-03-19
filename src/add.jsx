import React from 'react'
import './add-style.css'
 
export default class AddNums extends React.Component {
 
  state = { num1: '', num2: '', total: '' }  
 
 

  render() {
    return(
      <div className="mainContainer">
        <h1>Enter Two Numbers</h1>
 
        <input type="text" placeholder="Enter First Number" className="inputStyle" value={this.state.num1} onChange={ (eve) => { this.setState({ num1: eve.target.value }) } }/>
        <br/><br/>
 
        <input type="text" placeholder="Enter Second Number" className="inputStyle" value={this.state.num2} onChange={ (eve) => { this.setState({ num2: eve.target.value })} } />
        <br/><br/>
 
        <button id="x" class="btn btn-primary" onClick={()=>{this.addition()}} >Addition</button> 
        <button id="x" class="btn btn-primary" onClick={()=>{this.substraction()}} >Substraction</button>
        <button id="x" class="btn btn-primary" onClick={()=>{this.multiplication()}} >Multiplication</button>
        <button id="x" class="btn btn-primary" onClick={()=>{this.division()}} >Division</button>

        <br/><br/>

        <input type="text" className="outStyle" value={this.state.total} />
 
        <br/><br/>
      </div>
    )
  }
}
