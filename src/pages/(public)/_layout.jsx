import { Outlet, Navigate } from 'react-router-dom'

import { useUserStore } from '@stores/auth'

export default function Public() {
  const isLoggedIn = useUserStore.use.isLoggedIn()

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="overflow-hidden bg-background h-screen">
      <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
            Health Food
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">“Ré-apprenez à bien manger”</p>
              <footer className="text-sm">John Doe</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Outlet />

            <p className="px-8 text-center text-sm text-muted-foreground">
              En cliquant continuer, vous acceptez nos{' '}
              <a
                className="underline underline-offset-4 hover:text-primary"
                href="/terms"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="underline underline-offset-4 hover:text-primary"
                href="/privacy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
