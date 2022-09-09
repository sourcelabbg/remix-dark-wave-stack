import { ActionFunction } from '@remix-run/node'
import authenticator from '~/auth/authenticator'

export const action: ActionFunction = async ({ request }) => {
  return authenticator
    .authenticate('google', request, {
      successRedirect: '/soa',
      failureRedirect: undefined,
    })
    .catch((res: { status: number }) => {
      return res
    })
}
