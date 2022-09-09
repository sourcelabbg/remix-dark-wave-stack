import { Outlet } from '@remix-run/react'
import React from 'react'
import { LinksFunction } from '@remix-run/node'
import styles from '../styles/tailwind.css'
import authStyles from '../styles/auth.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: authStyles },
  ]
}

export default function Auth() {
  return (
    <div className="min-h-screen grid bg-secondary bg-mountain">
      <div className="flex items-center bg-white items-center justify-center mx-auto lg:mx-0 sm:w-4/5 md:w-3/5 w-full">
        <Outlet />
      </div>
    </div>
  )
}
