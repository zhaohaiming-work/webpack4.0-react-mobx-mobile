import React from 'react'
import PropTypes from 'prop-types'
import './common'
class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  }
  state = {
    error: null,
    errorInfo: null
  }
  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.errorInfo) {
      return (
        <div className='error-boundary'>
          <h2>Something went wrong!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
