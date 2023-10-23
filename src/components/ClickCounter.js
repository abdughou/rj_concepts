import React, { Component } from 'react'
import withCounter from './withCounterHOC'  


class ClickCounter extends Component {

  render() {
    const {count, incrementHandler, name} = this.props
    return (
      <div>
        <button onClick={incrementHandler}>clicked {count} times {name}</button> 
      </div>
    )
  }
}

export default withCounter(ClickCounter,5)  // higher order function is called here which wraps the ClickCounter component and returns a new component, 5 is a parameter sent to HOC
