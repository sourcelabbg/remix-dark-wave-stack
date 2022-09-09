import { Authenticator } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { UserDto } from '~/shared/schemas/dtos'
import auth0Strategy from '~/auth/strategies/auth0'
const authenticator = new Authenticator<UserDto>(sessionStorage)

authenticator.use(auth0Strategy, 'auth0')

export const logoutUrl = `https://${process.env.AUTH0_DOMAIN}/v2/logout`
export default authenticator
