import React, { Component } from 'react'

export default class ParentCC extends Component {
  render() {
    return (
      <div>
        <h3> Welcome at Parent CC as the class components </h3>
        <SubCCDemo />
      </div>
    )
  }
}

class SubCCDemo extends  Component {
    render() {
        return (
         <div>
            <h3> Welcome at Sub CC as the class components </h3>
         </div>
         )
}
}



