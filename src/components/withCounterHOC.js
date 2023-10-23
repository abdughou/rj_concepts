import React from 'react';

// This function demonstrate the higher order component which can be avoided code repetition in ClickCounter.js and HoverCounter.js

// The higher order function will be a simple functional component which takes original component as a parameter and return new component
// The new component is nothing but a class which implements a logic which are common to different components. 
//    in each of the components that wants this common logic, import this high order component and use it as a
//    wrapper component while exporting the component.

// HOC is a function which takes a component (WrappedComponent) enhances and returns a new component (WithCounter).

const withCounter = (WrappedComponent, incrementNumber) => { 

    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }

        }
        
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber  }
            })
        }


        render() {
            return <WrappedComponent incrementHandler={this.incrementCount} count={this.state.count} {...this.props}/>
        }

    }

    return WithCounter;

}

export default withCounter;