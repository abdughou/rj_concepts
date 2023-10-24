import React, { Component } from 'react'

// Summary

/*
  - Error boundaries are React Components that catch JavaScript errors anywhere in their child
      component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
  - A class component becomes an Error Boundary if it defines either (or both) of the lifecycle methods which are:
    - static getDerivedStateFromError() - used to render a fallback UI after an error has been thrown
    - componentDidCatch() - used to log the error information
  - The placement of the Error Boundary also matters. Only errors in the components below it are caught.
    - Error Boundaries do not catch errors for: 
        - Event handlers
        - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
        - Server side rendering
        - Errors thrown in the error boundary itself (rather than its children)
  - It provides a way to gracefully handle error in the application code.

*/



class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            hasError: false
      }
    }
    
  
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }   

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    } else {
    return this.props.children
    }
  }
}

export default ErrorBoundary
