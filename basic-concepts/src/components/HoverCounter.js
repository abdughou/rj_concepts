import React, { Component } from 'react'
import withCounter from './withCounterHOC' 


export class HoverCounter extends Component {

    
    render() {
        return (
        <div>
            <h1 onMouseOver={this.props.incrementHandler}>This is a heading {this.props.count} {this.props.name} </h1>      
        </div>
        )
    }
}

export default withCounter(HoverCounter,10)
