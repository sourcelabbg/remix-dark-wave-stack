import { LoaderFunction } from '@remix-run/node'
import authenticator from '~/auth/authenticator'

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate('google', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
}
