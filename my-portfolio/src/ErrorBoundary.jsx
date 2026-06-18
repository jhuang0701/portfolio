import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0E1A',
          color: '#E2E8F0',
          padding: '20px',
          fontFamily: 'monospace',
          textAlign: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Portfolio Error</h1>
            <p style={{ color: '#94A3B8', marginBottom: '20px' }}>
              An unexpected error occurred. Please refresh the page.
            </p>
            <details style={{ textAlign: 'left', color: '#4A9EFF', maxWidth: '600px', margin: '0 auto' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>Error details</summary>
              <pre style={{ 
                background: '#0F1629', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px'
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
