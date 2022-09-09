import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import React from 'react'
import { LoaderFunction } from '@remix-run/node'
import authenticator from '~/auth/authenticator'
import logo from '~/images/logo.svg'
import { UserDto } from '~/shared/schemas/dtos'
import { prisma } from '~/db.server'

export default function Admin() {
  const user = useLoaderData<UserDto | undefined>()

  return (
    <div className="flex flex-col min-h-screen print:min-h-auto print:block py-2 px-10">
      <header className="py-4 flex justify-between">
        <NavLink to="/soa">
          <img id="logo" src={logo} alt="logo" />
        </NavLink>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  // If the user is not logged in, redirect them to the login page
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...user } = await authenticator
    .isAuthenticated(request, {
      failureRedirect: '/login',
    })
    .then((user) => ({ ...user, password: undefined }))
  //if the user didn't set their company, redirect them to the company edit form
  return prisma.user.findFirst({
    where: {
      id: user.id,
    },
    select: {
      id: true,
      name: true,
      company: true,
    },
  })
}
