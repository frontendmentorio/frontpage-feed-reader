import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        {user ? (
          <div>
            <span style={{ marginRight: '1rem' }}>{user.email}</span>
            <button onClick={handleSignOut} style={{ padding: '0.5rem 1rem' }}>
              Sign Out
            </button>
          </div>
        ) : (
          <p>Guest Mode</p>
        )}
      </div>
      <p style={{ marginTop: '2rem' }}>
        {user ? 'Welcome! Your feeds will appear here.' : 'Browsing as guest. Sign up to save your data!'}
      </p>
    </div>
  )
}