import Portfolio from './JonathanHuangPortfolio'
import ErrorBoundary from './ErrorBoundary'

export default function App() { 
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  )
}