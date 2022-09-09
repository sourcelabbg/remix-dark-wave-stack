import React from 'react'
import { LoaderFunction } from '@remix-run/node'
import authenticator from '~/auth/authenticator'

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.authenticate('auth0', request)
}
