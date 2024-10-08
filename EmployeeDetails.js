import React from 'react'


export default function EmployeeDetails(props) {
  return (
    <div>    
      <h1>Employee Details</h1>
      <p>Employee Name : {props.employee.name} </p>
      <p>Employee Age : {props.employee.age}</p>
      <p>Employee city :{props.employee.city}</p>
      <p>Employee salary: {props.employee.salary}</p>
    </div>
  );
}
   