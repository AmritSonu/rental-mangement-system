// Component Imports
import Register from '@views/Register'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

import RegistrationForm from '@/components/RegisterForm'

const RegisterPage = () => {
  // Vars
  const mode = getServerMode()

  // return <Register mode={mode} />

  return <RegistrationForm />
}

export default RegisterPage
