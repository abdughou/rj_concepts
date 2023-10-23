import React, { Component } from 'react'

// Reder Props
// The term 'render prop' refers to a technique for sharing code between
// react components using prop whose value is a function

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}        
      </div>
    )
  }
}

export default User
