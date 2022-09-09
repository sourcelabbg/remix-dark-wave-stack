import { PassThrough } from 'stream'
import type { EntryContext } from '@remix-run/node'
import { Response } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToPipeableStream } from 'react-dom/server'
import { createInstance } from 'i18next'
import Backend from 'i18next-fs-backend'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from './i18next.server'
import i18n from './i18n' // your i18n configuration file
import common from './locales/en/common.js'

const ABORT_DELAY = 5000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false

    const instance = createInstance()

    // Then we could detect locale from the request
    // And here we detect what namespaces the routes about to render want to use
    const ns = i18next.getRouteNamespaces(remixContext)

    i18next
      .getLocale(request)
      .then((lng) => {
        return instance
          .use(initReactI18next) // Tell our instance to use react-i18next
          .use(Backend) // Setup our backend
          .init({
            ...i18n, // spread the configuration
            lng, // The locale we detected above
            ns, // The namespaces the routes about to render wants to use
            resources: {
              en: {
                common,
              },
            },
          })
      })
      .then(() => {
        const { pipe, abort } = renderToPipeableStream(
          <I18nextProvider i18n={instance}>
            <RemixServer context={remixContext} url={request.url} />
          </I18nextProvider>,
          {
            onShellReady: () => {
              const body = new PassThrough()

              responseHeaders.set('Content-Type', 'text/html')

              resolve(
                new Response(body, {
                  headers: responseHeaders,
                  status: didError ? 500 : responseStatusCode,
                })
              )

              pipe(body)
            },
            onShellError: (err) => {
              reject(err)
            },
            onError: (error) => {
              didError = true

              console.error(error)
            },
          }
        )

        setTimeout(abort, ABORT_DELAY)
      })
  })
}
