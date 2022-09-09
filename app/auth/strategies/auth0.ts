import { User } from '@prisma/client'
import { Auth0Strategy } from 'remix-auth-auth0'
import { prisma } from '~/db.server'

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK_URL!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    domain: process.env.AUTH0_DOMAIN!,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile

    const user: User | null = await prisma.user.findFirst({
      where: {
        email: profile.emails[0].value,
      },
    })
    if (user === null) {
      return prisma.user.create({
        data: {
          email: profile.emails[0].value,
          name: profile.displayName,
        },
      })
    }
    return user
  }
)
export default auth0Strategy
