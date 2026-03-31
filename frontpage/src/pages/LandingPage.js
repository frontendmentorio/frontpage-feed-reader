import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Frontpage</h1>
      <p>Your personal RSS feed aggregator</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/signup">
          <button style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>
            Sign Up
          </button>
        </Link>
        <Link to="/dashboard">
          <button style={{ padding: '0.5rem 1rem' }}>
            Try as Guest
          </button>
        </Link>
      </div>
    </div>
  )
}