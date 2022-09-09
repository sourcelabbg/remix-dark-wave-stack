import { FormStrategy } from 'remix-auth-form'
import { prisma } from '~/db.server'
import bcrypt from 'bcryptjs'
import { UserDto } from '~/shared/schemas/dtos'

const login = (email: string, password: string): Promise<UserDto> => {
  return prisma.user
    .findFirst({
      where: {
        email,
      },
      include: {
        password: true,
      },
    })
    .then((user) => {
      if (user === null || user.password?.hash === undefined)
        return Promise.reject(new Error('Wrong email or password'))

      return bcrypt
        .compare(password, user.password?.hash)
        .then((passwordMatches) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, createdAt, updatedAt, ...rest } = user
          return passwordMatches
            ? rest
            : Promise.reject(new Error('Wrong email or password'))
        })
    })
}
const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get('email') as string
  const password = form.get('password') as string
  // let user = await login(email, password);
  // the type of this user must match the type you pass to the Authenticator
  // the strategy will automatically inherit the type if you instantiate
  // directly inside the `use` method
  if (email === null || password === null)
    return Promise.reject('Email or password is null')
  return await login(email, password)
})

export default formStrategy
