import type { ActionFunction, LoaderFunction } from 'remix'
import authenticator from '~/auth/authenticator'

export const loader: LoaderFunction = ({ request }: { request: Request }) => {
  return authenticator.authenticate('auth0', request, {
    successRedirect: '/soa',
    failureRedirect: '/login',
  })
}
