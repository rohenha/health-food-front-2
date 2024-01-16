import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { onLogin, onLogout } from '@stores/auth'

export default function useAuth() {
  const navigate = useNavigate()

  return {
    onLogin: useCallback(
      async (form) => {
        const response = await onLogin(form)
        if (response) {
          navigate('/dashboard')
        }
      },
      [navigate],
    ),
    onLogout: useCallback(
      async (url = '/sign-in') => {
        const response = await onLogout()
        if (response) {
          navigate(url)
        }
      },
      [navigate],
    ),
  }
}
