import React from 'react'
import './App.css';
import CounterFc from './Counter/CounterFc';

export default function App() {
  return (
    <div className='App'>
      <h1>Counter UI</h1>
      <CounterFc />
    </div>
  )
}



/*import React from 'react'
import './App.css'
import StateCC from './Components/StateCC'

export default function App() {
  return (
    <div className='App'>
      <h2>My Details</h2>
      <StateCC />
    </div>
  )
}





/*
Object as a props
import React from "react";
import EmployeeDetails from "./Components/EmployeeDetails";
function App(){
  const employee = {
    name : 'john Doe',
    age : 24 ,
    city : 'Nashik',
    salary : 21000
  };
  return<EmployeeDetails employee={employee}/>
}
export default App;






/*import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent';
import ParentCC from './Components/ParentCC';

function App() {
  return (
    <div>
      <h1>Welcome To  My App</h1>
    <Demo />
    <Demo1 />
    <Parent />
    <ParentCC />
    </div>
  
  );
}
function Demo(){
   return(
    <h3>return hello as a functional components</h3>
  
  );
}

function Demo1(){
  return(
  <p><h3>HEllO in Demo 1 as a functional components</h3></p>
  );
}


export default App;
*/