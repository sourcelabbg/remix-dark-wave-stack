import { useLoaderData } from '@remix-run/react'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { prisma } from '~/db.server'
import { Company } from '@prisma/client'
import bgr from '~/images/rila-one-bgr.svg'
import { z } from 'zod'
import { Form, formAction, performMutation } from 'remix-forms'
import { makeDomainFunction } from 'domain-functions'
import authenticator from '~/auth/authenticator'
import { sessionStorage } from '~/services/session.server'
import { UserDto } from '~/shared/schemas/dtos'

type UserNameWithCompany = {
  id: string
  name: string
  company?: Omit<Company, 'createdAt' | 'updatedAt'>
} | null

export const schema = z.object({
  userName: z.string().min(1).max(255),
  name: z.string().min(1, { message: 'Company name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  addressLine1: z.string().min(1, { message: 'Address is required' }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: 'City is required' }),
  postcode: z.string().min(1, { message: 'Postcode is required' }),
  countryId: z.number().min(1, { message: 'Country is required' }),
  vatNumber: z.string().min(1, { message: 'VAT number is required' }),
})

const environmentSchema = z.object({
  companyId: z.string().uuid().nullable(),
  userId: z.string().uuid(),
})

export default function Id() {
  const data = useLoaderData<UserNameWithCompany>()

  return (
    <div className="flex min-h-[calc(100vh_-8rem)] bg-no-repeat bg-contain bg-right-bottom bg-fixed bg-secondary bg-mountain">
      <div className="flex flex-col bg-white px-12 lg:mx-0 sm:w-4/5 md:w-3/5 w-full">
        <h2>Profile</h2>
        {data?.company == null && (
          <p className="my-4 text-secondary font-bold">
            You need to add your company information in order to proceed
          </p>
        )}
        <Form
          className="company-form flex flex-col w-full gap-6"
          buttonLabel={'Save'}
          labels={{ name: 'Company name' }}
          values={{ ...(data?.company ?? {}), userName: data?.name }}
          schema={schema}
        >
          {({ Field, Errors, Button }) => (
            <>
              <Field name="userName" label="Your name" />
              <div className="grid grid-cols-2 gap-4">
                <Field
                  name="name"
                  className="flex flex-col"
                  label="Company name"
                />
                <Field
                  name="email"
                  className="flex flex-col"
                  label="Company email"
                />
              </div>
              <Field name="addressLine1" />
              <Field name="addressLine2" />
              <div className="grid grid-cols-2 gap-4">
                <Field className="flex flex-col" name="city" />
                <Field className="flex flex-col" name="postcode" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field className="flex flex-col" name="countryId" />
                <Field className="flex flex-col" name="vatNumber" />
              </div>
              <Errors />
              <Button className="primary self-end">Save</Button>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}

const mutation = makeDomainFunction(
  schema,
  environmentSchema
)(async ({ userName, ...values }, { companyId, userId }) => {
  console.log({ userName, values, companyId, userId })
  const company = companyId
    ? await prisma.company.update({
        where: {
          id: companyId,
        },
        data: {
          ...values,
        },
      })
    : await prisma.company.create({
        data: {
          ...values,
          users: {
            connect: {
              id: userId,
            },
          },
        },
      })

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      name: userName,
    },
  })

  return { ...user, company }
})

export const loader: LoaderFunction = async ({ request }) => {
  const { id } = (await authenticator.isAuthenticated(request)) ?? {}

  return await prisma.user.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      companyId: true,
      company: true,
    },
  })
}

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)

  const res = await performMutation({
    request,
    schema,
    mutation,
    environment: { userId: user?.id, companyId: user?.companyId },
  })

  if (!res.success) return res

  const dbUser = res.data

  if (user?.companyId !== dbUser.company.id || user?.name !== dbUser.name) {
    const session = await sessionStorage.getSession(
      request.headers.get('Cookie')
    )
    const user: UserDto = session.get('user')
    user.companyId = dbUser.companyId
    user.name = dbUser.name
    session.set('user', user)

    return json(res.data, {
      headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
    })
  } else {
    return json(res.data)
  }
}
