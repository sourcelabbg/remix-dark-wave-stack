import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'

import styles from './styles/tailwind.css'
import React from 'react'
import * as Toast from '@radix-ui/react-toast'
import i18next from './i18next.server'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next'
import { json } from '@remix-run/node'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
  {
    rel: 'icon',
    href: '/favicon.png',
    type: 'image/png',
  },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

type LoaderData = { locale: string }

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18next.getLocale(request)
  return json<LoaderData>({ locale })
}

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: 'common',
}

export default function App() {
  const { locale } = useLoaderData<LoaderData>()

  const { i18n } = useTranslation()

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Toast.Provider>
          <Outlet />
          <Toast.Viewport />
        </Toast.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
