import React from 'react';

const ErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        errorDetail: null
      };
    }
  
    static getDerivedStateFromError(error) {
      return { 
        hasError: true,
        errorDetail: error + '', // convert to string
      };
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <>
            <h1>Something went wrong</h1>
            <p>Error message: {this.state.errorDetail}</p>
          </>
        );
      }
  
      return <WrappedComponent {...this.props} />; 
    }
  }
};

export default ErrorBoundary;