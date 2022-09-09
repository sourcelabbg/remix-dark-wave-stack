import * as AvatarPrimitive from '@radix-ui/react-avatar'

export type AvatarProps = {
  src?: string
  imgClassName?: string
  fallbackText?: string
  fallbackClassName?: string
  size?: number
}

export default function Avatar({
  src,
  imgClassName,
  fallbackText,
  fallbackClassName,
}: AvatarProps) {
  const fallbackParts = fallbackText?.split(' ') ?? []
  const initials =
    fallbackParts.length > 1
      ? fallbackParts[0][0] + fallbackParts[1][0]
      : fallbackParts[0][0]

  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image
        data-testid="avatar"
        className={`h-8 w-8 block rounded-full border bg-gray-300 border-avatar ${imgClassName}`}
        src={src}
        alt={fallbackText}
      />
      <AvatarPrimitive.Fallback>
        <div
          data-testid="avatar-fallback"
          className={`h-8 w-8 border-avatar bg-gray-200 rounded-full font-bold bg-avatar flex items-center justify-center text-text ${fallbackClassName}`}
        >
          {initials ?? ''}
        </div>
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
