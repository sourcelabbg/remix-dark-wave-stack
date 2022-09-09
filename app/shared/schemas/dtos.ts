import { User, Company } from '@prisma/client'

export type CompanyDto = Omit<Company, 'createdAt' | 'updatedAt'>

export type UserDto = Omit<
  User,
  'password' | 'createdAt' | 'updatedAt' | 'company'
> & {
  company?: CompanyDto
}
