import SharedButton from '~/components/controls/shared/button'
import cx from 'classnames'

export default function Button({
  className,
  ...props
}: React.ComponentProps<typeof SharedButton>) {
  return (
    <div className="col-start-2 ">
      <SharedButton
        {...props}
        className={cx(className, 'primary float-right')}
      />
    </div>
  )
}
