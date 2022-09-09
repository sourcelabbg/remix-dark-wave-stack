import { Transition } from '@headlessui/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import cx from 'classnames'
import React, { Fragment, useState } from 'react'

interface Props {
  title: string
  description?: string
  children?: React.ReactNode
  trigger?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}

const Dialog = ({
  trigger,
  title,
  description,
  children,
  onOpenChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true)
  const onOpenChangeHandler = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }
  return (
    <DialogPrimitive.Root
      defaultOpen={isOpen}
      onOpenChange={onOpenChangeHandler}
    >
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-black/50"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={cx(
              'fixed z-50',
              'max-h-full',
              'overflow-auto',
              'rounded-lg p-4 w-full sm:w-2/3 md:w-1/2',
              'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
              'bg-white dark:bg-gray-800',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
            )}
          >
            <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {title}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                {description}
              </DialogPrimitive.Description>
            )}
            {children}
            <div className="mt-4 flex justify-end gap-4">
              <DialogPrimitive.Close className="primary">
                Close
              </DialogPrimitive.Close>
            </div>

            <DialogPrimitive.Close
              className={cx(
                'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  )
}

export default Dialog
