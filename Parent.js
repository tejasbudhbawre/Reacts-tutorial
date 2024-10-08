import React from 'react'

export default function Parents() {
  return (
    <div>
      <h2>Welcome in a parent</h2>
      <Subparent />
    </div>
  )
}

function Subparent(){
    return (
      <p><h4>Tejas</h4></p>
    );
}
