import React from 'react'
import { LoaderFunction } from '@remix-run/node'
import authenticator from '~/auth/authenticator'

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.authenticate('auth0', request, {
    successRedirect: '/soa',
  })
}

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mt-4 text-2xl font-bold">Welcome to RilaOne!</p>
    </div>
  )
}
