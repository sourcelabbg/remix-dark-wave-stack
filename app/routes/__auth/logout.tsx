import { LoaderFunction } from '@remix-run/node'
import authenticator, { logoutUrl } from '~/auth/authenticator'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.logout(request, {
    redirectTo: `${logoutUrl}?returnTo=${encodeURIComponent(
      process.env.APP_URL!
    )}`,
  })
}
