// Component Imports
import Login from '@views/Login'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import LoginForm from '@/components/LoginForm'

const LoginPage = () => {
  // Vars
  const mode = getServerMode()

  return <LoginForm />

  // return <Login mode={mode} />
}

export default LoginPage
