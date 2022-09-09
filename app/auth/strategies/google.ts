import { GoogleStrategy } from 'remix-auth-google'
import { prisma } from '~/db.server'
import { User } from '@prisma/client'

const googleStrategy = new GoogleStrategy(
  {
    clientID:
      '962624649543-j648ft431anhrbcvsbhous3j5rl2g60t.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/google/callback',
  },
  async ({
    accessToken,
    refreshToken,
    extraParams,
    profile,
  }): Promise<User> => {
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
export default googleStrategy
