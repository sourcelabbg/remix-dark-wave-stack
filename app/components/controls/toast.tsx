import * as ToastPrimitive from '@radix-ui/react-toast'
import cx from 'classnames'
import React from 'react'

type Props = {
  title?: string
  description?: string
  duration?: number
  onClose?: () => void
  className?: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

const Toast = ({
  title,
  description,
  onClose,
  className,
  type,
  duration = 3000,
}: Props) => {
  const onOpenChange = React.useCallback((open: boolean) => {
    if (!open) {
      onClose?.()
    }
  }, [])

  return (
    <ToastPrimitive.Root
      open={title !== undefined || description !== undefined}
      duration={duration}
      onOpenChange={onOpenChange}
      className={cx(
        className,
        type === 'success' ? 'border-l-8 border-green-600' : '',
        'z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg',
        'bg-white dark:bg-gray-800',
        'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
        'radix-state-closed:animate-toast-hide',
        'radix-swipe-end:animate-toast-swipe-out',
        'translate-x-radix-toast-swipe-move-x',
        'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
    >
      <div className="flex">
        <div className="w-0 flex-1 flex items-center pl-5 py-4">
          <div className="w-full radix">
            {title && (
              <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {title}
              </ToastPrimitive.Title>
            )}
            {description && (
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                {description}
                <span className="font-medium">repository/branch</span>
              </ToastPrimitive.Description>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col px-3 py-2 space-y-1">
            <div className="h-0 flex-1 flex">
              <ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Dismiss
              </ToastPrimitive.Close>
            </div>
          </div>
        </div>
      </div>
    </ToastPrimitive.Root>
  )
}

export default Toast
